import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import { testRedux } from "../actions/testRedux";

import Header from "./Header";
import Navigation from "./Navigation";
import Content from "./Content";

import "../App.css";

const mapDispatchToProps = dispatch => ({
  testRedux: () => dispatch(testRedux())
});

const mapStateToProps = state => ({
  ...state
});

class Layout extends Component {
  testRedux = event => {
    this.props.testRedux();
  };

  render() {
    return (
      <Fragment>
        <Header />
        <button onClick={this.testRedux}>Test redux action</button>{" "}
        <div className="app">
          <Navigation />
          <Content />
        </div>
      </Fragment>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout);
