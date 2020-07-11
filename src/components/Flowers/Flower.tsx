import React from "react";
import { Item } from "../../redux/types";

type Flower = {
  item: Item;
};

const Flower = ({ item: { location, name, price } }: Flower) => {
  return (
    <div className='flower'>
      <div
        className='flower__image'
        style={{
          backgroundImage: `url(
            ${location}
          )`,
        }}
      ></div>
      <div className='flower__main-info'>
        <div className='flower__name'>{name}</div>
        <div className='flower__price'>{price} грн</div>
      </div>
    </div>
  );
};

export default Flower;
