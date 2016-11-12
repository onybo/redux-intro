/* eslint-disable import/default */

import React from 'react';
import {render} from 'react-dom';
require('./favicon.ico'); // Tell webpack to load favicon.ico
import './styles/styles.scss'; // Yep, that's right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.
import VerificationForm from './components/VerificationForm';
import state from './reducers/initialState';

render(
  <VerificationForm company={state.company} 
                    numberList={state.numbersList} />
  , document.getElementById('app')
);
