import React from "react";
import Flower from "./Flower";

const Flowers = ({ flowers, types }) => (
  <div className="flowers">
    {types.find(type => type.checked)
      ? flowers.map((flower, index) =>
          types.find(type => type.checked && type.name === flower.type) ? (
            <Flower key={index} flower={flower} />
          ) : null
        )
      : flowers.map((flower, index) => <Flower key={index} flower={flower} />)}
  </div>
);

export default Flowers;
