import React from "react";
import Flower from "./Flower";
import { useSelector } from "react-redux";

const Flowers = () => {
  const items = useSelector((state) => state.items);
  const types = useSelector((state) => state.types);

  return (
    <div className='flowers'>
      {types.find((type) => type.checked)
        ? items.map((flower, index) =>
            types.find((type) => type.checked && type.name === flower.type) ? (
              <Flower key={index} flower={flower} />
            ) : null
          )
        : items.map((flower, index) => <Flower key={index} flower={flower} />)}
    </div>
  );
};

export default Flowers;
