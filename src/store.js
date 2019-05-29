import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers/index";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";

export default function configureStore(initialState = {}) {
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
}
