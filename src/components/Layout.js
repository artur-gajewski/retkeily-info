import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import Header from "./Header";
import Navigation from "./Navigation";

import "../App.css";

class Layout extends Component {
  testRedux = event => {
    this.props.testRedux();
  };

  render() {
    return (
      <Fragment>
        <Header />
        <div className="app">
          <Navigation />
          {this.props.children}
        </div>
      </Fragment>
    );
  }
}

export default connect()(Layout);
