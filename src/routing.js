import React from 'react';
import {Route, IndexRedirect} from 'react-router';

import Main from './Moduls';
import Start from './Moduls/pageStart';
import Game from './Moduls/pageGame';

const indexRoute = (localStorage.getItem('gameData') === null) ? 'start' : 'game';

export default (
  <Route path="/" component={Main}>
    <Route path="/start" component={Start}/>
    <Route path="/game" component={Game}/>

    <IndexRedirect to={indexRoute}/>
  </Route>
);
