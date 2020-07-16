import React from "react";
import Contacts from "./Contacts";
import Logo from "./Logo";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../redux/types";
import WithSpinner from "../Useful/WithSpinner";

const Header = () => {
  const contacts = useSelector((state: State) => state.contacts);

  return (
    <div className='header'>
      <WithSpinner
        data={contacts}
        Component={Contacts}
        renderComponentIf={(contacts) =>
          contacts.phone1 || contacts.phone2 || contacts.email
        }
      />
      <Logo />
    </div>
  );
};

export default Header;
