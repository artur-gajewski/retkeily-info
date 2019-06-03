import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";

import { logoutUser } from "../actions/account";

const mapDispatchToProps = dispatch => ({
  logoutUser: () => {
    dispatch(logoutUser());
  }
});

const mapStateToProps = state => ({
  ...state
});

class Navigation extends Component {
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
    const { account } = this.props;

    if (this.state.redirectToFrontPage === true) {
      this.setState(() => ({
        redirectToFrontPage: false
      }));
      return <Redirect to="/" />;
    }

    return (
      <nav>
        <ul>
          <li>
            <Link to="/">
              <div className="navLink">
                <i className="material-icons">home</i>
                <span>Etusivu</span>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/news">
              <div className="navLink">
                <i className="material-icons">assignment</i>
                <span>Tiedotteet</span>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/events">
              <div className="navLink">
                <i className="material-icons">event_available</i>
                <span>Tapahtumat</span>
              </div>
            </Link>
          </li>

          {account.user && (
            <Fragment>
              <li>
                <Link to="/me">
                  <div className="navLink">
                    <i className="material-icons">location_on</i>
                    <span>Ilmoita sijaintisi</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/friends">
                  <div className="navLink">
                    <i className="material-icons">people</i>
                    <span>Kaverilista</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/favorites">
                  <div className="navLink">
                    <i className="material-icons">bookmark</i>
                    <span>Suosikit</span>
                  </div>
                </Link>
              </li>

              <li>
                <div className="navLink" onClick={() => this.handleLogout()}>
                  <i className="material-icons">logout</i>
                  <span>Kirjaudu ulos</span>
                </div>
              </li>
            </Fragment>
          )}

          {!account.user && (
            <Fragment>
              <li>
                <Link to="/login">
                  <div className="navLink">
                    <i className="material-icons">person</i>
                    <span>Kirjaudu sisään</span>
                  </div>
                </Link>
              </li>
            </Fragment>
          )}
        </ul>
      </nav>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation);
