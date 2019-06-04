import React, { Component, Fragment } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { logoutUser } from "../ducks/account";
import logo from "./camping.png";

const mapDispatchToProps = dispatch => ({
  logoutUser: () => {
    dispatch(logoutUser());
  }
});

const mapStateToProps = state => ({
  ...state
});

class Header extends Component {
  state = {
    redirectToFrontPage: false
  };

  handleLogout = () => {
    this.props.logoutUser();
    this.setState(() => ({
      redirectToFrontPage: true
    }));
  };

  render() {
    if (this.state.redirectToFrontPage === true) {
      this.setState(() => ({
        redirectToFrontPage: false
      }));
      return <Redirect to="/" />;
    }

    return (
      <header>
        <div className="branding">
          <img alt="logo" src={logo} />
        </div>
        <div className="page-details">
          <div className="title">Retkeilijöiden tiedotteet</div>
        </div>
        <div className="settings">
          {!this.props.account.user && (
            <Link to="/login">
              <div className="menu-button profile">
                <i className="material-icons">person</i>
              </div>
            </Link>
          )}
          {this.props.account.user && (
            <Fragment>
              <img
                alt="avatar"
                className="account-picture"
                src={this.props.account.user.pictureUrl}
              />
              <div
                className="menu-button profile"
                onClick={() => this.handleLogout()}
              >
                <i className="material-icons">logout</i>
              </div>
            </Fragment>
          )}
        </div>
      </header>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
