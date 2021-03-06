/* eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
require('./favicon.ico'); // Tell webpack to load favicon.ico
import './styles/styles.scss'; // Yep, that's right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.
import VerificationPage from './containers/VerificationPage'; // eslint-disable-line import/no-named-as-default
import state from './reducers/initialState';
import rootSaga from './sagas';

const store = configureStore(state);
store.runSaga(rootSaga);

render(
    <Provider store={store}>
      <VerificationPage/>
    </Provider>
  , document.getElementById('app'));
