import { useEffect, useState } from "react";
import { CATEGORY_API } from "../../utils/constants";
import ProductCard from "../Products/ProductCard";
import { useCapitalize, useGetBackgroundColor } from "../../utils/customHooks";
import { useParams } from "react-router-dom";

const CategorySection = ({ category, id }) => {
  const params = useParams();
  category = (category === undefined) ? params.category : category;
const [data, setData] = useState([]);
    useEffect(() => {
    getData();
  }, [category]);

  const getData = async () => {
    const response = await fetch(CATEGORY_API + category);
    const json = await response.json();
    setData(Object.values(json));
  };
  return (
    <section style={{ backgroundColor: useGetBackgroundColor() }}>
      <div className="text-center container py-5">
        <h4 className="mt-4 mb-5">
          <strong>{category ? useCapitalize(category) : "Similar Products"}</strong>
        </h4>

        <div className="row product" id={category}>
        {data.map((product)=>(id !== product.id) && <ProductCard key={product.title} product={product}/>)}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
