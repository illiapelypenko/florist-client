import React from 'react';

const Navbar = () => {
  return (
    <ul className='navbar'>
      <li className='navbar__item'>
        <span>главная</span>
      </li>
      <li className='navbar__item'>
        <span>цветы</span>
      </li>
      <li className='navbar__item'>
        <span>букеты</span>
      </li>
      <li className='navbar__item'>
        <span>разное</span>
      </li>
      <li className='navbar__item'>
        <span>контакты</span>
      </li>
    </ul>
  );
};

export default Navbar;
