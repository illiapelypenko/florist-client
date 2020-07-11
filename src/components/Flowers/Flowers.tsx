import React from "react";
import Flower from "./Flower";
import { useSelector } from "react-redux";
import { State } from "../../redux/types";

const Flowers = () => {
  const items = useSelector((state: State) => state.items);
  const types = useSelector((state: State) => state.types);

  return (
    <div className='flowers'>
      {types.find((type) => type.checked)
        ? items.map((item, index) =>
            types.find((type) => type.checked && type.name === item.type) ? (
              <Flower key={index} item={item} />
            ) : null
          )
        : items.map((item, index) => <Flower key={index} item={item} />)}
    </div>
  );
};

export default Flowers;
