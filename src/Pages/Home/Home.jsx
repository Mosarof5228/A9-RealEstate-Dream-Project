import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Home = () => {
  const { name } = useContext(AuthContext);
  return (
    <div>
      <h2>This is Home page</h2>
      <h2>{name}</h2>
    </div>
  );
};

export default Home;
