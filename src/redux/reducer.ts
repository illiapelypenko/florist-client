import initialState from "./initialState";
import { Action, State, Type } from "./types";
import {
  GET_ITEMS,
  GET_TYPES,
  SET_TYPES,
  GET_CONTACTS,
  ADD_ITEM_TO_BASKET,
  DELETE_ITEM_FROM_BASKET,
  CLEAR_BASKET,
} from "./actions";

function reducer(state: State = initialState, action: Action): State {
  switch (action.type) {
    case GET_ITEMS:
      return { ...state, items: action.payload };

    case GET_CONTACTS:
      return { ...state, contacts: action.payload };

    case GET_TYPES:
      return {
        ...state,
        types: action.payload,
      };

    case SET_TYPES:
      const toogledType = action.payload;
      const toogledTypeIndex = state.types.findIndex(
        (type: Type) => type.name === toogledType.name
      );
      const newTypes = [...state.types];
      newTypes[toogledTypeIndex].checked = !newTypes[toogledTypeIndex].checked;

      return {
        ...state,
        types: newTypes,
      };

    case ADD_ITEM_TO_BASKET:
      return {
        ...state,
        basket: [...state.basket, action.payload],
      };

    case DELETE_ITEM_FROM_BASKET:
      const newBasket = [...state.basket];
      newBasket.splice(
        [...state.basket].findIndex((item) => action.payload._id === item._id),
        1
      );
      return {
        ...state,
        basket: newBasket,
      };
    case CLEAR_BASKET:
      return {
        ...state,
        basket: [],
      };
    default:
      return state;
  }
}

export default reducer;
