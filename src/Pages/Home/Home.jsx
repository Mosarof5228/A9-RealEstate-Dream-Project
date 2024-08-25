import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Banner from "./Banner";

const Home = () => {
  const { name } = useContext(AuthContext);
  return (
    <div className="">
      <h2>This is Home page</h2>
      <Banner></Banner>
      <h2>{name}</h2>
    </div>
  );
};

export default Home;
