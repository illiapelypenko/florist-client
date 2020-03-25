import React from "react";
import "./Flowers.scss";
import Flower from "./Flower";

const Flowers = ({ flowers, types }) => (
  <div className="flowers">
    {types.find(type => type.checked)
      ? flowers.map(flower =>
          types.find(type => type.checked && type.name === flower.type) ? (
            <Flower flower={flower} />
          ) : null
        )
      : flowers.map(flower => <Flower flower={flower} />)}
  </div>
);

export default Flowers;
