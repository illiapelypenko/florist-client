import React, { useState, useEffect } from 'react';
import Header from './Header/Header';
import Filter from './Filter/Filter';
import Flowers from './Flowers/Flowers';
import Footer from './Footer/Footer';
import serverURL from '../serverURL';
import axios from 'axios';
import '../stylesheets/main.scss';
import Navbar from './Navbar/Navbar';

const App = () => {
  const [items, setItems] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [types, setTypes] = useState([]);

  const getItems = async () => {
    const res = await axios.get(`${serverURL}/api/items/all`);
    const items = await res.data;
    setItems(items);
  };

  const getTypes = async () => {
    const res = await axios.get(`${serverURL}/api/types/all`);
    let types = await res.data;
    types = types.map((type) => ({ ...type, checked: false }));
    setTypes(types);
  };

  const getContacts = async () => {
    const res = await axios.get(`${serverURL}/api/contacts/`);
    const contacts = await res.data;
    setContacts(contacts);
  };

  const handleTypeChange = (e) => {
    const newTypes = types.slice();
    newTypes.find((type) => type.name === e.target.name).checked =
      e.target.checked;
    setTypes(newTypes);
  };

  useEffect(() => {
    getItems();
    getTypes();
    getContacts();
  }, []);

  return (
    <div className='app'>
      <Header contacts={contacts} />
      <Navbar />
      <div className='main'>
        <Filter types={types} onTypeChange={handleTypeChange} />
        <Flowers flowers={items} types={types} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
