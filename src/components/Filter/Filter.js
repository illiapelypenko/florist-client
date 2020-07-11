import React from "react";

const Filter = ({ types, onTypeChange }) => {
  return (
    <ul className="filter">
      {types.map((type, index) => {
        return (
          <li key={index} className="filter__item">
            <input
              type="checkbox"
              id={type.name}
              name={type.name}
              onChange={onTypeChange}
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
