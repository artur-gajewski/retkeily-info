import React, { Component } from "react";
import { connect } from "react-redux";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";

import Layout from "../../components/Layout";
import { loginFacebookUser, loginGoogleUser } from "../../ducks/account";

const mapDispatchToProps = dispatch => ({
  loginFacebookUser: account => dispatch(loginFacebookUser(account)),
  loginGoogleUser: account => dispatch(loginGoogleUser(account))
});

const mapStateToProps = state => ({
  ...state
});

class Front extends Component {
  responseFacebook = response => {
    this.props.loginFacebookUser(response);
    this.props.history.push("/");
  };

  responseGoogle = response => {
    this.props.loginGoogleUser(response);
    this.props.history.push("/");
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <Layout>
        <article>
          <h3>Kirjaudu sisään</h3>
          <div className="card">
            <FacebookLogin
              appId="367842327192175"
              autoLoad={false}
              fields="name,email,picture"
              size="metro"
              callback={this.responseFacebook}
            />

            <GoogleLogin
              clientId="974148643665-f3hijlp35c7ebu98c4729pgbmm1mcld9.apps.googleusercontent.com"
              buttonText="Login"
              autoLoad={false}
              onSuccess={this.responseGoogle}
              cookiePolicy={"single_host_origin"}
            />
          </div>
        </article>
      </Layout>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Front);
