import Banner from "./Banner";
import Properties from "./Properties";

// import { useContext } from "react";
// import { AuthContext } from "../../AuthProvider/AuthProvider";

const Home = () => {
  // const { user } = useContext(AuthContext);
  return (
    <div className="">
      <Banner></Banner>
      <Properties></Properties>
      {/* <h2>{user}</h2> */}
    </div>
  );
};

export default Home;
