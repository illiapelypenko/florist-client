import { State, Item, Type, Contacts } from "./types";

const items: Item[] = [];
const types: Type[] = [];
const contacts: Contacts = {
  phone1: "",
  phone2: "",
  email: "",
};

const initialState: State = {
  items,
  types,
  contacts,
};

export default initialState;
