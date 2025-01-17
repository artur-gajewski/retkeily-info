import thunkMiddleware from "redux-thunk";
import promiseMiddleware from "redux-promise-middleware";
import { combineReducers, applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import * as ducks from "../ducks";

const enhancers = [];
const middlewares = [thunkMiddleware, promiseMiddleware];
const rootReducer = combineReducers(ducks);

const composedEnhancers = composeWithDevTools(
  applyMiddleware(...middlewares),
  ...enhancers
);

export default () => createStore(rootReducer, composedEnhancers);
