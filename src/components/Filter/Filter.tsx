import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toogleTypeCheckedStatus } from "../../redux/actions";
import { State, Type } from "../../redux/types";

const Filter = () => {
  const dispatch = useDispatch();
  const types = useSelector((state: State) => state.types);

  function handleChange(type: Type) {
    dispatch(toogleTypeCheckedStatus(type));
  }

  return (
    <ul className='filter'>
      {types.map((type, index) => {
        return (
          <li key={index} className='filter__item'>
            <input
              type='checkbox'
              id={type.name}
              name={type.name}
              onChange={() => handleChange(type)}
              checked={type.checked}
            />
            <label htmlFor={type.name}>{type.name}</label>
          </li>
        );
      })}
    </ul>
  );
};

export default Filter;
