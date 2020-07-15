import React from "react";
import { useSelector } from "react-redux";
import { State, Contacts as ContactsType } from "../../redux/types";
import Spinner from "../Useful/Spinner";

const Contacts = () => {
  const contacts: ContactsType = useSelector((state: State) => state.contacts);

  return (
    <>
      {contacts.phone1 || contacts.phone2 || contacts.email ? (
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
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default Contacts;
