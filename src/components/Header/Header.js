import React from 'react';
import FlowerIcon from '../../assets/flower.svg';

const Header = ({ contacts }) => {
  return (
    <div className='header'>
      <ul className='header__block header__contacts'>
        <li>
          <a href={`tel:${contacts.phone1}`}>{contacts.phone1}</a>
        </li>
        <li>
          <a href={`tel:${contacts.phone2}`}>{contacts.phone2}</a>
        </li>
        <li>
          <a href={`email:${contacts.email}`}>{contacts.email}</a>
        </li>
      </ul>
      <div className='header__block header__logo'>
        <h1>FLORIST</h1>
      </div>
      <div className='header__block'>
        <div className='header__icon-container'>
          <img className='header__icon' src={FlowerIcon} alt="flower-icon"></img>
        </div>
      </div>
    </div>
  );
};

export default Header;
