import initialState from "./initialState";
import { Action, State, Type } from "./types";
import { GET_ITEMS, GET_TYPES, SET_TYPES, GET_CONTACTS } from "./actions";

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

    default:
      return state;
  }
}

export default reducer;
