import React from "react";
import { State, Contacts as ContactsType } from "../../redux/types";

const Contacts = ({ data }: { data: ContactsType }) => {
  return (
    <ul className='header__contacts'>
      <li>
        <a href={`tel:${data.phone1}`}>{data.phone1}</a>
      </li>
      <li>
        <a href={`tel:${data.phone2}`}>{data.phone2}</a>
      </li>
      <li>
        <a href={`email:${data.email}`}>{data.email}</a>
      </li>
    </ul>
  );
};

export default Contacts;
