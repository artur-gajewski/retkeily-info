import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import Header from "./Header";
import Navigation from "./Navigation";
import { getUserAndLogin } from "../actions/account";

import "./Layout.css";

const mapDispatchToProps = dispatch => ({
  getUserAndLogin: () => dispatch(getUserAndLogin())
});

const mapStateToProps = state => ({
  ...state
});

class Layout extends Component {
  componentDidMount() {
    this.props.getUserAndLogin();
  }

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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout);
