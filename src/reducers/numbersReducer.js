import {VERIFY_NUMBER} from '../actions/numbersActions';
import initialState from './initialState';

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.
const numberReducer = (state = initialState.numberList, action) => {

  switch (action.type) {    
    case VERIFY_NUMBER.REQUEST:
      return Object.assign({}, state, {isPending: true});
    case VERIFY_NUMBER.SUCCESS:
      return Object.assign({}, state, {numbers: setNumberVerified(state.numbers, action.number), isPending: false});
    case VERIFY_NUMBER.FAILURE:
      return Object.assign({}, state, {isPending: false});

    default:
      return state;
  }
};

const setNumberVerified = (numbers, n) => {
  const index = numbers.findIndex(e => e.id === n.id);
  return (
  [
    ...numbers.slice(0, index),
    Object.assign({}, numbers[index], {verified: n.verified}),
    ...numbers.slice(index + 1)
  ]
  );
};

export default numberReducer;