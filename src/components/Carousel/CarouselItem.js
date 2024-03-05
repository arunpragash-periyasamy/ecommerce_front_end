import { Link } from "react-router-dom";
const CarouselItem = ({ url, src, status }) => {
  return (
    <div className={"carousel-item " + status}>
      <Link to={url}>
        <img
          src={src}
          className="d-block w-100 carousel-style"
          alt="Jewelry Banner"
        />
      </Link>
    </div>
  );
};

export default CarouselItem;
