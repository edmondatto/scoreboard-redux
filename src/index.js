import React from 'react';
import ReactDOM from 'react-dom';
import Provider from 'react-redux';
import { createStore } from 'redux';
import PlayerReducer from 'reducers/player'
import Scoreboard from './components/layout';
import PLAYERS from "./components/data";

const store = createStore(
  PlayerReducer
);


ReactDOM.render(
  <Provider store={store}>
    <Scoreboard initialPlayers={PLAYERS}/>
  </Provider>,
  document.getElementById('root'));
