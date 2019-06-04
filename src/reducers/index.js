import { combineReducers } from "redux";
import testRedux from "./testRedux";
import account from "./account";
import news from "./news";

export default combineReducers({
  testRedux,
  account,
  news
});
