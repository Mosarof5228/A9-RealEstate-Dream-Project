import { useState } from "react";
import { useEffect } from "react";

const Properties = () => {
  const [properties, setProperties] = useState([]);
  console.log(properties);

  useEffect(() => {
    fetch("properties.json")
      .then((res) => res.json())
      .then((datas) => setProperties(datas));
  }, []);
  return (
    <div>
      <h2>{properties.length}</h2>
    </div>
  );
};

export default Properties;
