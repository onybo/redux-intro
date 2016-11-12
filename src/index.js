/* eslint-disable import/default */

import React from 'react';
import {render} from 'react-dom';
require('./favicon.ico'); // Tell webpack to load favicon.ico
import './styles/styles.scss'; // Yep, that's right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.
import VerificationForm from './components/VerificationForm';
import state from './reducers/initialState';

const doRender = () => (
  render(<VerificationForm company={state.company} 
                    numberList={state.numbersList} 
                    verifyNumber={ number => verifyNumber(number)}/>
  , document.getElementById('app'))
);

doRender();

const verifyNumber = (number) => {
  state.numbersList.numbers = setNumberVerified(state.numbersList.numbers, number)
  doRender();
}

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