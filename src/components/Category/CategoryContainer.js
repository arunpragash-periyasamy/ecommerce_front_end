import { useEffect, useState } from "react";
import { CATEGORIES, PRODUCTS_API } from "../../utils/constants";
import CategorySection from "./CategorySection";
const CategoryContainer = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const response = await fetch(CATEGORIES);
    const json = await response.json();
    setData(Object.values(json));
  };
  return (
    <div id="productSection">
      {data &&
        data.map((category) => (
          <CategorySection key={category} bgColor={"#F5aEE6"} category={category} />
        ))}
    </div>
  );
};

export default CategoryContainer;
