import React, { Component } from "react";
import { connect } from "react-redux";

import Layout from "../../components/Layout";
import { testReduxAction } from "../../actions/testRedux";

const mapDispatchToProps = dispatch => ({
  testRedux: () => dispatch(testReduxAction())
});

const mapStateToProps = state => ({
  ...state
});

class Front extends Component {
  testRedux = event => {
    this.props.testRedux();
  };

  render() {
    return (
      <Layout>
        <article>
          <h3>Etusivu</h3>
          <div className="card">
            <button onClick={this.testRedux}>Test redux action</button>
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
