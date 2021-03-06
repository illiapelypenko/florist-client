import axios from "axios";
import serverURL from "../serverURL";
import {
  DispatchItems,
  DispatchTypes,
  DispatchToogleTypeCheckedStatus,
  DispatchContacts,
  GET_ITEMS_TYPE,
  GET_TYPES_TYPE,
  SET_TYPES_TYPE,
  GET_CONTACTS_TYPE,
  ADD_ITEM_TO_BASKET_TYPE,
  DELETE_ITEM_FROM_BASKET_TYPE,
  CLEAR_BASKET_TYPE,
  DispatchClearBasket,
  Item,
  Type,
  Contacts,
  Order,
} from "./types";

export const CLEAR_BASKET: CLEAR_BASKET_TYPE = "CLEAR_BASKET";
export const GET_ITEMS: GET_ITEMS_TYPE = "GET_ITEMS";
export const GET_TYPES: GET_TYPES_TYPE = "GET_TYPES";
export const SET_TYPES: SET_TYPES_TYPE = "SET_TYPES";
export const GET_CONTACTS: GET_CONTACTS_TYPE = "GET_CONTACTS";
export const ADD_ITEM_TO_BASKET: ADD_ITEM_TO_BASKET_TYPE = "ADD_ITEM_TO_BASKET";
export const DELETE_ITEM_FROM_BASKET: DELETE_ITEM_FROM_BASKET_TYPE =
  "DELETE_ITEM_FROM_BASKET";

export function getItems() {
  return async (dispatch: DispatchItems) => {
    const res = await axios.get(`${serverURL}/api/items/all`);
    const items: Item[] = await res.data;
    dispatch({
      type: GET_ITEMS,
      payload: items,
    });
  };
}

export function getContacts() {
  return async (dispatch: DispatchContacts) => {
    const res = await axios.get(`${serverURL}/api/contacts`);
    const contacts: Contacts = await res.data;
    dispatch({
      type: GET_CONTACTS,
      payload: contacts,
    });
  };
}

export function getTypes() {
  return async (dispatch: DispatchTypes) => {
    const res = await axios.get(`${serverURL}/api/types/all`);
    const types: Type[] = await res.data.map((type: Type) => ({
      ...type,
      checked: false,
    }));
    dispatch({
      type: GET_TYPES,
      payload: types,
    });
  };
}

export function toogleTypeCheckedStatus(type: Type) {
  return async (dispatch: DispatchToogleTypeCheckedStatus) => {
    dispatch({
      type: SET_TYPES,
      payload: type,
    });
  };
}

export function addItemToBasket(item: Item) {
  return {
    type: ADD_ITEM_TO_BASKET,
    payload: item,
  };
}

export function deleteItemFromBasket(item: Item) {
  return {
    type: DELETE_ITEM_FROM_BASKET,
    payload: item,
  };
}

export function makeOrder(order: Order) {
  return async (dispatch: DispatchClearBasket) => {
    try {
      const res = await axios.post(`${serverURL}/api/order/makeorder`, order);
      if (res.statusText === "OK") {
        dispatch({
          type: CLEAR_BASKET,
        });
      }
    } catch {
      console.log("makeOrder error");
    }
  };
}
