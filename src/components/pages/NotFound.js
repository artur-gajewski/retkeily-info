import React, { Component } from "react";

import Layout from "../Layout";

class NotFound extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <Layout>
        <article>
          <h3>Sivua ei löydy!</h3>
        </article>
      </Layout>
    );
  }
}

export default NotFound;
