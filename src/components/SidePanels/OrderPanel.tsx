import React, { useState, SyntheticEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../redux/types";
import { makeOrder } from "../../redux/actions";

const OrderPanel = () => {
  const dispatch = useDispatch();
  const basket = useSelector((state: State) => state.basket);
  const [name, setName] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    setName("");
    setAddress("");
    setPhone("");
    setEmail("");
    dispatch(makeOrder({ name, email, phone, address, basket }));
    alert("Заказ отправлен");
  };

  return (
    <form onSubmit={handleSubmit}>
      <ul className='side-panel side-panel--order'>
        <li className='side-panel__item'>
          <label htmlFor='name'>Имя:</label>
          <input
            type='text'
            id='name'
            name='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </li>
        <li className='side-panel__item'>
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            id='email'
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </li>
        <li className='side-panel__item'>
          <label htmlFor='phone'>Телефон:</label>
          <input
            type='tel'
            id='phone'
            name='phone'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </li>
        <li className='side-panel__item'>
          <label htmlFor='address'>Адрес:</label>
          <input
            type='text'
            id='address'
            name='address'
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </li>
        <button className='btn'>Заказать</button>
      </ul>
    </form>
  );
};
export default OrderPanel;
