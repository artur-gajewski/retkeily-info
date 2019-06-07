import React, { Component, Fragment } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { logoutUser } from "../ducks/account";
import logo from "./logo.png";
import Navigation from "./Navigation";

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
    redirectToFrontPage: false,
    showTopBar: false
  };

  handleLogout = () => {
    this.props.logoutUser();
    this.setState(() => ({
      redirectToFrontPage: true
    }));
  };

  handleToggleMenu = () => {
    this.setState(() => ({
      showTopBar: this.state.showTopBar ? false : true
    }));
  };

  handleClickMenu = () => {
    this.setState(() => ({
      showTopBar: false
    }));
  };

  render() {
    if (this.state.redirectToFrontPage === true) {
      this.setState(() => ({
        redirectToFrontPage: false,
        showTopBar: false
      }));
      return <Redirect to="/" />;
    }

    return (
      <Fragment>
        <header>
          <div className="branding">
            <div
              className="menu-button menu-toggle nav"
              onClick={this.handleToggleMenu}
            >
              <i className="material-icons">menu</i>
            </div>
            <img alt="logo" src={logo} />
          </div>
          <div className="page-details">
            <div className="title">Retkeilijöiden tiedotteet</div>
          </div>
          <div className="settings">
            {!this.props.account.user && (
              <Link to="/login">
                <div className="header-button profile">
                  <i className="material-icons">person</i>
                </div>
              </Link>
            )}
            {this.props.account.user && (
              <Fragment>
                <img
                  alt="avatar"
                  className="account-picture"
                  src={this.props.account.user.picture_url}
                />
                <div
                  className="header-button profile"
                  onClick={() => this.handleLogout()}
                >
                  <i className="material-icons">logout</i>
                </div>
              </Fragment>
            )}
          </div>
        </header>
        {this.state.showTopBar && (
          <div className="topBar">
            <Navigation onClickMenu={this.handleClickMenu} />
          </div>
        )}
      </Fragment>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
