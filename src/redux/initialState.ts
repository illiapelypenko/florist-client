import { State, Item, Type, Contacts, Basket } from "./types";

const items: Item[] = [];
const types: Type[] = [];
const contacts: Contacts = {
  phone1: "",
  phone2: "",
  email: "",
};
const basket: Basket = [];

const initialState: State = {
  items,
  types,
  contacts,
  basket,
};

export default initialState;
