import initialState from './initialState';
import { Action, State } from './types';
import { GET_ITEMS } from './actions';

function reducer(state: State = initialState, action: Action): State {
  switch(action.type) {
    case GET_ITEMS: 
      return {...state, items: action.payload};
    default:
      return state;
  }
}

export default reducer;