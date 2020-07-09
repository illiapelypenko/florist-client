import React from 'react';
import bigAbstractRose from '../../assets/big-abstract-rose-side.png';

const Header = ({ contacts }) => {
	return (
		<div className='header'>
			<img
				className='header__pic'
				src={bigAbstractRose}
				alt='big-abstract-rose'></img>
			<h1>FLORIST</h1>
			<div className='header__contacts'>
				<a href={`tel:${contacts.phone1}`}>{contacts.phone1}</a>
				<a href={`tel:${contacts.phone2}`}>{contacts.phone2}</a>
				<a href={`email:${contacts.email}`}>{contacts.email}</a>
			</div>
		</div>
	);
};

export default Header;
