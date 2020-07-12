import React from "react";
import Flowers from "../Flowers/Flowers";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { State, Item } from "../../redux/types";

const Basket = () => {
  const items = useSelector((state: State) => state.items);
  const basket = useSelector((state: State) => state.basket);
  const [itemsInBucket, setItemsInBucket] = useState<Item[]>([]);

  useEffect(() => {
    setItemsInBucket(
      items.filter((item) => basket.find((id) => item._id === id))
    );
  }, [basket]);

  return (
    <div className='basket'>
      <Flowers items={itemsInBucket} />
    </div>
  );
};

export default Basket;
