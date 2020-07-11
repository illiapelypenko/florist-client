import React from "react";
import { Item } from "../../redux/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { addItemToBasket } from "../../redux/actions";
import { useDispatch } from "react-redux";

type Flower = {
  item: Item;
};

const Flower = ({ item }: Flower) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(addItemToBasket(item._id));
  };

  return (
    <div className='flower'>
      <div
        className='flower__image'
        style={{
          backgroundImage: `url(
            ${item.location}
          )`,
        }}
      ></div>
      <div className='flower__main-info'>
        <div className='flower__name'>{item.name}</div>
        <div className='flower__price'>{item.price} грн</div>
        <div className='flower__add-btn-container' onClick={handleClick}>
          <FontAwesomeIcon icon={faPlus} />
        </div>
      </div>
    </div>
  );
};

export default Flower;
