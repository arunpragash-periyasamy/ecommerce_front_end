import { useEffect, useState } from "react";
import { CATEGORY_API } from "../../utils/constants";
import ProductCard from "./ProductCard";

const ProductsSection = ({ category }) => {
const [data, setData] = useState([]);
    useEffect(() => {
    getData();
  }, []);

  const backgroundColors = [
    "#F5EEE6",
    "#FFF8E3",
    "#F3D7CA",
    "#F9F7C9",
    "#EAECCC",
    "#D2E3C8",
  ];
  const capitalizeFirstLetter = (str) =>
    str.charAt(0).toUpperCase() + str.slice(1);
  const getBackgroundColor = () =>
    backgroundColors[Math.floor(Math.random() * backgroundColors.length)];
  const getData = async () => {
    const response = await fetch(CATEGORY_API + category);
    const json = await response.json();
    setData(Object.values(json));
  };
  return (
    <section style={{ backgroundColor: getBackgroundColor() }}>
      <div className="text-center container py-5">
        <h4 className="mt-4 mb-5">
          <strong>{category ? capitalizeFirstLetter(category) : "Similar Products"}</strong>
        </h4>

        <div className="row product" id={category}>
        {data.map((product)=><ProductCard key={product.title} product={product}/>)}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
