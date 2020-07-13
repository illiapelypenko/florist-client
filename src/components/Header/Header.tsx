import React from "react";
import { useSelector } from "react-redux";
import { State, Contacts } from "../../redux/types";

const Header = () => {
  const contacts: Contacts = useSelector((state: State) => state.contacts);

  return (
    <div className='header'>
      <ul className='header__contacts'>
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
      <div className='header__logo'>
        <h1>FLORIST</h1>
      </div>
      {/* <div className='header__block'></div> */}
    </div>
  );
};

export default Header;
