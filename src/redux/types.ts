export type GET_ITEMS_TYPE = 'GET_ITEMS';
export type GET_ITEMTYPES_TYPE = 'GET_TYPES';
export type GET_CONTACTS_TYPE = 'GET_CONTACTS';

export type DispatchItems = (arg: { type: GET_ITEMS_TYPE; payload: Items; }) => void;
export type DispatchItemTypes = (arg: { type: GET_ITEMTYPES_TYPE; payload: ItemTypes; }) => void;
export type DispatchContacts = (arg: { type: GET_CONTACTS_TYPE; payload: Contacts; }) => void;

export type ActionTypes = GET_ITEMS_TYPE | GET_ITEMTYPES_TYPE | GET_CONTACTS_TYPE;
export type PayloadTypes = Items | ItemTypes | Contacts;
export type DispatchTypes = DispatchItems | DispatchItemTypes | DispatchContacts;

export type Action = {
  type: ActionTypes;
  payload: any;
};

export type State = {
  items: Items;
  itemTypes: ItemTypes;
  contacts: Contacts;
};

export type Items = Item[];
export type ItemTypes = ItemType[];

export type Item = {
  id: string,
  name: string,
  price: string,
  type: string,
  birthtimeMs: number
}

export type ItemType = {
  id: string;
  name: string;
};

export type Contacts = {
  phone1: string;
  phone2: string;
  email: string;
};