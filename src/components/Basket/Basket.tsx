import React from "react";
import Flowers from "../Flowers/Flowers";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { State, Item } from "../../redux/types";

const Basket = () => {
  const basket = useSelector((state: State) => state.basket);

  return (
    <div className='basket'>
      <Flowers items={basket} />
    </div>
  );
};

export default Basket;
