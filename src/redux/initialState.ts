import { State, Items, ItemTypes, Contacts } from './types';

const items: Items = [];
const itemTypes: ItemTypes = [];
const contacts: Contacts = {
  phone1: '',
  phone2: '',
  email: '',
};

const initialState: State = {
  items, 
  itemTypes, 
  contacts
};

export default initialState;