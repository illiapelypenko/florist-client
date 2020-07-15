import React from "react";
import Flower from "./Flower";
import { useSelector } from "react-redux";
import { State, Item } from "../../redux/types";
import Spinner from "../Useful/Spinner";

type Flowers = {
  items: Item[];
};

const Flowers = ({ items }: Flowers) => {
  const types = useSelector((state: State) => state.types);

  return (
    <>
      {types.length > 0 ? (
        <div className='flowers'>
          {types.find((type) => type.checked)
            ? items.map((item, index) =>
                types.find(
                  (type) => type.checked && type.name === item.type
                ) ? (
                  <Flower key={index} item={item} />
                ) : null
              )
            : items.map((item, index) => <Flower key={index} item={item} />)}
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default Flowers;
