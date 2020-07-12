export type GET_ITEMS_TYPE = "GET_ITEMS";
export type GET_TYPES_TYPE = "GET_TYPES";
export type SET_TYPES_TYPE = "SET_TYPES";
export type GET_CONTACTS_TYPE = "GET_CONTACTS";
export type ADD_ITEM_TO_BASKET_TYPE = "ADD_ITEM_TO_BASKET";
export type DELETE_ITEM_FROM_BASKET_TYPE = "DELETE_ITEM_FROM_BASKET";

export type DispatchItems = (arg: {
  type: GET_ITEMS_TYPE;
  payload: Item[];
}) => void;

export type DispatchTypes = (arg: {
  type: GET_TYPES_TYPE;
  payload: Type[];
}) => void;

export type DispatchToogleTypeCheckedStatus = (arg: {
  type: SET_TYPES_TYPE;
  payload: Type;
}) => void;

export type DispatchContacts = (arg: {
  type: GET_CONTACTS_TYPE;
  payload: Contacts;
}) => void;

// export type DispatchAddItemToBasket = (arg: {
//   type: ADD_ITEM_TO_BASKET_TYPE;
//   payload: Item;
// }) => void;

export type ActionTypes =
  | GET_ITEMS_TYPE
  | GET_TYPES_TYPE
  | GET_CONTACTS_TYPE
  | SET_TYPES_TYPE
  | ADD_ITEM_TO_BASKET_TYPE
  | DELETE_ITEM_FROM_BASKET_TYPE;

export type PayloadTypes = Item[] | Type[] | Contacts;

// export type DispatchTypes =
//   | DispatchItems
//   | DispatchItemTypes
//   | DispatchContacts;

export type Action = {
  type: ActionTypes;
  payload: any;
};

export type State = {
  items: Item[];
  types: Type[];
  contacts: Contacts;
  basket: Basket; // items_id's[]
};

export type Item = {
  _id: string;
  name: string;
  price: string;
  type: string;
  birthtimeMs: number;
  location: string;
  fileName: string;
};

export type Type = {
  _id: string;
  name: string;
  checked: boolean;
};

export type Contacts = {
  phone1: string;
  phone2: string;
  email: string;
};

export type Basket = Item[];
