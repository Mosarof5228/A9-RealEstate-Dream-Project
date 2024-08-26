import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useContext } from "react";
import { Carousel } from "react-responsive-carousel";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Banner = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
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
