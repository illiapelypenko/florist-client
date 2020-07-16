import React from "react";
import { Item } from "../../redux/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import { addItemToBasket, deleteItemFromBasket } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { makeAnimation } from "../Basket/BasketIcon";

type Flower = {
  item: Item;
};

const Flower = ({ item }: Flower) => {
  const dispatch = useDispatch();
  const location = useLocation();

  const handleAddClick = () => {
    dispatch(addItemToBasket(item));
    makeAnimation();
  };

  // #TODO delete click
  const handleDeleteClick = () => {
    dispatch(deleteItemFromBasket(item));
  };

  const flowerBtn = () => {
    switch (location.pathname) {
      case "/":
        return (
          <div className='flower__add-btn-container' onClick={handleAddClick}>
            <FontAwesomeIcon icon={faPlus} />
          </div>
        );
      case "/basket":
        return (
          <div
            className='flower__delete-btn-container'
            onClick={handleDeleteClick}
          >
            <FontAwesomeIcon icon={faTimes} />
          </div>
        );
    }
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
        {flowerBtn()}
      </div>
    </div>
  );
};

export default Flower;
