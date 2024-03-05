import {useEffect, useState} from 'react';
import { CATEGORIES, PRODUCTS_API } from '../../utils/constants';
import ProductsSection from './ProductsSection';
const ProductContainer = () =>{

    const[data, setData] = useState(null);
    useEffect(()=>{
        getData();
    },[])
const getData= async()=>{
    const response = await fetch(CATEGORIES);
    const json = await response.json();
    setData(Object.values(json));
}
    return(
        
  <div id="productSection">
    {data && data.map((e)=> <ProductsSection key={e} bgColor={"#F5aEE6"} category={e}/>)}
  </div>
    )
}

export default ProductContainer;