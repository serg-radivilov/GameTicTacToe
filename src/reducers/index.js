import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import gameData from '../Moduls/reducers/gameData';

export default combineReducers({
  routing: routerReducer,
  gameData
})