import React from 'react';
import serverURL from '../serverURL';

const Flower = ({ flower: { fileName, path, name, price } }) => {
	return (
		<div className='flower'>
			<div
				className='flower__image'
				style={{
					backgroundImage: `url(
            ${path}
          )`
				}}></div>
			<div className='flower__main-info'>
				<div className='flower__name'>{name}</div>
				<div className='flower__price'>{price} грн</div>
			</div>
		</div>
	);
};

export default Flower;
