import Slide from "./Slide";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Home = () => {
  const { name } = useContext(AuthContext);
  return (
    <div className="">
      <h2>This is Home page</h2>
      <Slide></Slide>
      <h2>{name}</h2>
    </div>
  );
};

export default Home;
