import React from "react";
import "./Header.scss";

const Header = ({ contacts }) => {
  return (
    <div className="header">
      <div className="header__pic"></div>
      <h1>FLORIST</h1>
      <div className="header__contacts">
        <a href={`tel:${contacts.phone1}`}>{contacts.phone1}</a>
        <a href={`tel:${contacts.phone2}`}>{contacts.phone2}</a>
        <a href={`email:${contacts.email}`}>{contacts.email}</a>
      </div>
    </div>
  );
};

export default Header;
