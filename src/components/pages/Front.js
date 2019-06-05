import React, { Component } from "react";
import { connect } from "react-redux";

import Layout from "../../components/Layout";

const mapDispatchToProps = dispatch => ({});

const mapStateToProps = state => ({
  user: state.account.user
});

class Front extends Component {
  render() {
    const { user } = this.props;

    return (
      <Layout>
        <article>
          <div className="page-title-container">
            <h3>Etusivu</h3>
          </div>
          <div className="card">
            <div>
              <h4>
                Tervetuloa
                {user && ", " + user.name}
              </h4>

              <div>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </div>
            </div>
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
