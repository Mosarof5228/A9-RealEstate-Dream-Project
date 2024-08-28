import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import PropertyCard from "./PropertyCard";
const Home = () => {
  const properties = useLoaderData();
  return (
    <div className="">
      <Banner></Banner>
      <div className="">
        <div className="text-center justify-center mx-auto w-[45%]">
          <h2 className="font-semibold text-4xl py-2">Best Offer for Rent</h2>
          <p className="pb-8">
            Residences can be classified by, if, and how they are connected to
            neighbouring residences and land. Different types of housing tenure
            can be used for the same physical type. For example, connected
            residents.
          </p>
          <div className="divider">Enloy Properties</div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 justify-around px-1">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property}></PropertyCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
