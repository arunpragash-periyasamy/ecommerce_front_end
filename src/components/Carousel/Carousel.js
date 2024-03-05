import ElectronicsBanner from "../../assets/banners/electronics_banner.png";
import JewelryBanner from "../../assets/banners/jwellery_banner.png";
import MensWearBanner from "../../assets/banners/mens_wear_banner.png";
import WomensWearBanner from "../../assets/banners/womens_wear_banner.png";
import CarouselItem from "./CarouselItem";
const Carousel = () => {
  return (
    <div className=" mb-2">
      <div
        id="carouselExample"
        className="carousel slide"
        style={{ height: "700px" }}
        data-bs-ride="carousel"
      >
        <div className="carousel-inner rounded">
          <CarouselItem
            src={ElectronicsBanner}
            url="/Electronics"
            status="active"
          />
          <CarouselItem src={JewelryBanner} url="/Jewelry" />
          <CarouselItem src={MensWearBanner} url="/Men'sWear" />
          <CarouselItem src={WomensWearBanner} url="/Women'sWear" />
        </div>
        <button
          className="carousel-control-prev"
          style={{ top: 10 }}
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          style={{ top: 5 }}
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
