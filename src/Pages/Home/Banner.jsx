import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
const Banner = () => {
  return (
    <Carousel>
      <div>
        <img src="/src/assets/1.jpg" />
      </div>
      <div>
        <img src="/src/assets/11.jpeg" />
      </div>
      <div>
        <img src="/src/assets/12.jpg" />
      </div>
      <div>
        <img src="/src/assets/13.jpeg" />
      </div>
      <div>
        <img src="/src/assets/12.jpg" />
      </div>
    </Carousel>
  );
};

export default Banner;
