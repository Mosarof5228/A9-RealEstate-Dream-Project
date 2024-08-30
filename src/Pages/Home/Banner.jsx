import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "/src/assets/1.jpg";
import img2 from "/src/assets/11.jpeg";
import img3 from "/src/assets/12.jpg";
import img4 from "/src/assets/13.jpeg";
import img5 from "/src/assets/12.jpg";
import { useContext } from "react";
import { Carousel } from "react-responsive-carousel";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Banner = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <Carousel>
      <div>
        <img src={img1} />
      </div>
      <div>
        <img src={img2} />
      </div>
      <div>
        <img src={img3} />
      </div>
      <div>
        <img src={img4} />
      </div>
      <div>
        <img src={img5} />
      </div>
    </Carousel>
  );
};

export default Banner;
