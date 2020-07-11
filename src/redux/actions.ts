import axios from 'axios';
import serverURL from '../serverURL';
import { Items, ActionTypes, DispatchItems, GET_ITEMS_TYPE } from './types';

export const GET_ITEMS: GET_ITEMS_TYPE = 'GET_ITEMS';

export function getItems() {
  return async (dispatch: DispatchItems) => {
    console.log('gooo');
    const res = await axios.get(`${serverURL}/api/items/all`);
    const items: Items = await res.data;
    dispatch({
      type: GET_ITEMS,
      payload: items
    });
  }
}