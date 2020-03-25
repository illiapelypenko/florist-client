import React from "react";
import "./Filter.scss";

const Filter = ({ types, onTypeChange }) => {
  return (
    <div className="filter">
      {types.map(type => {
        return (
          <div className="filter__item">
            <input
              type="checkbox"
              id={type.name}
              name={type.name}
              onChange={onTypeChange}
              checked={type.checked}
            />
            <label for={type.name}>{type.name}</label>
          </div>
        );
      })}
    </div>
  );
};

export default Filter;
