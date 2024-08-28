import { useLoaderData } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Banner from "./Banner";
import PropertyCard from "./PropertyCard";
import { useEffect } from "react";
const Home = () => {
  const properties = useLoaderData();
  // aos for animation properties
  useEffect(() => {
    AOS.init({
      duration: 1000,
      disable: false,
      initClassName: "aos-init",
      animatedClassName: "aos-animate",
      debounceDelay: 50,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <div className="">
      <Banner></Banner>

      <div className="">
        <div
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-mirror="true"
          className="text-center justify-center mx-auto w-[45%]"
        >
          <h2 className="font-semibold text-4xl py-2">Best Offer for Rent</h2>
          <p className="pb-8">
            Residences can be classified by, if, and how they are connected to
            neighbouring residences and land. Different types of housing tenure
            can be used for the same physical type. For example, connected
            residents.
          </p>
          <div className="divider">Enloy Properties</div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-mirror="true"
          // data-aos="zoom-in"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 justify-around px-1"
        >
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property}></PropertyCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
