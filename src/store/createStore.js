import { createStore, combineReducers, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import math from '../reducers/mathReducer';
import user from '../reducers/userReducer';



//Cutom Logger Start

// var myLogger = (store) => { 
//   return  (next) => { 
//     return (action) => {
//       console.log('Logged Action', action);
//       next(action);
//     }
//   }
// } This can be written according to ES6 as :

// var myLogger = (store) => (next) => (action) => {
//   console.log('Logged Action', action);
//   next(action)
// }

//Custom Logger End

export default createStore(combineReducers({ math, user }), {}, applyMiddleware(createLogger(),thunk));
//console.log('Initial State of Store Is : ', store.getState());
