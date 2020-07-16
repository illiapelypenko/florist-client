import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toogleTypeCheckedStatus } from "../../redux/actions";
import { State, Type } from "../../redux/types";
import Spinner from "../Useful/Spinner";

const FilterPanel = ({ data }: { data: Type[] }) => {
  const dispatch = useDispatch();

  function handleChange(type: Type) {
    dispatch(toogleTypeCheckedStatus(type));
  }

  return (
    <ul className='side-panel side-panel--filter'>
      {data.map((type, index) => {
        return (
          <li key={index} className='side-panel__item'>
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

export default FilterPanel;
