import React from 'react';
import serverURL from '../serverURL';

const Flower = ({ flower: { _id, fileName, name, price } }) => {
	return (
    <div className='flower'>
      <div
        className='flower__image'
        style={{
          backgroundImage: `url(
            ${serverURL}/api/items/picture/${_id}
          )`,
        }}
      ></div>
      <div className='flower__main-info'>
        <div className='flower__name'>{name}</div>
        <div className='flower__price'>{price} грн</div>
      </div>
    </div>
  );
};

export default Flower;
