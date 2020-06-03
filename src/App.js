import React, { useState, useEffect } from 'react';
import Header from './Header/Header';
import Filter from './Filter/Filter';
import Flowers from './Flowers/Flowers';
import Footer from './Footer/Footer';
import serverURL from './serverURL';
import './App.scss';

const App = () => {
	const [items, setItems] = useState([]);
	const [contacts, setContacts] = useState([]);
	const [types, setTypes] = useState([]);

	const getItems = async () => {
		const res = await fetch(`${serverURL}/api/items/all`);
		const items = await res.json();
		setItems(items);
	};

	const getTypes = async () => {
		const res = await fetch(`${serverURL}/api/types/all`);
		let types = await res.json();
		types = types.map((type) => ({ ...type, checked: false }));
		setTypes(types);
	};

	const getContacts = async () => {
		const res = await fetch(`${serverURL}/api/contacts/`);
		const contacts = await res.json();
		setContacts(contacts);
	};

	const handleTypeChange = (e) => {
		const newTypes = types.slice();
		newTypes.find((type) => type.name === e.target.name).checked =
			e.target.checked;
		setTypes(newTypes);
	};

	useEffect(getItems, []);
	useEffect(getTypes, []);
	useEffect(getContacts, []);

	return (
		<div className='app'>
			<Header contacts={contacts} />
			<div className='main'>
				<Filter types={types} onTypeChange={handleTypeChange} />
				<Flowers flowers={items} types={types} />
			</div>
			<Footer />
		</div>
	);
};

export default App;
