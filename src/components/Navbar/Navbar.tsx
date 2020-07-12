import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <ul className='navbar'>
      <li className='navbar__item'>
        <Link to='/'>главная</Link>
      </li>
      <li className='navbar__item'>
        <Link to='/'>цветы</Link>
      </li>
      <li className='navbar__item'>
        <Link to='/'>букеты</Link>
      </li>
      <li className='navbar__item'>
        <Link to='/'>разное</Link>
      </li>
      <li className='navbar__item'>
        <Link to='/'>контакты</Link>
      </li>
    </ul>
  );
};

export default Navbar;
