import React from "react";
import Flower from "./Flower";
import { useSelector } from "react-redux";
import { State, Item } from "../../redux/types";

type Flowers = {
  items: Item[];
};

const Flowers = ({ items }: Flowers) => {
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
