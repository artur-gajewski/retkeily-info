import React, { Fragment } from "react";

import Header from "./Header";
import Navigation from "./Navigation";
import Content from "./Content";

import "../App.css";

function Layout() {
  return (
    <Fragment>
      <Header />
      <div className="app">
        <Navigation />
        <Content />
      </div>
    </Fragment>
  );
}

export default Layout;
