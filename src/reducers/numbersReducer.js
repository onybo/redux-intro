import {VERIFY_NUMBER} from '../constants/actionTypes';
import initialState from './initialState';

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.
const numberReducer = (state = initialState.numberList, action) => {

  switch (action.type) {    
    case VERIFY_NUMBER:
      return Object.assign({}, state, {numbers: setNumberVerified(state.numbers, action.number)});

    default:
      return state;
  }
};

const setNumberVerified = (numbers, n) => {
  const index = numbers.findIndex(e => e.id === n.id);
  return (
  [
    ...numbers.slice(0, index),
    Object.assign({}, numbers[index], {verified: !n.verified}),
    ...numbers.slice(index + 1)
  ]
  );
};

export default numberReducer;