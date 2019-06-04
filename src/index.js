import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import configureStore from "./store";

import Front from "./components/pages/Front";
import Login from "./components/pages/Login";
import News from "./components/pages/News";
import PageNotFound from "./components/pages/NotFound";

import * as serviceWorker from "./serviceWorker";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

require("dotenv").config({ path: ".env.development.local" });

ReactDOM.render(
  <Provider store={configureStore()}>
    <Router>
      <Switch>
        <Route path="/" exact component={Front} />
        <Route path="/news" exact component={News} />
        <Route path="/login" exact component={Login} />
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
