import React from "react";
import Contacts from "./Contacts";
import Logo from "./Logo";

const Header = () => {
  return (
    <div className='header'>
      <Contacts />
      <Logo />
    </div>
  );
};

export default Header;
