import React, { Component } from "react";
import { connect } from "react-redux";

import Layout from "../Layout";
import { getNews } from "../../actions/news";

const mapDispatchToProps = dispatch => ({
  getNews: () => dispatch(getNews())
});

const mapStateToProps = state => ({
  news: state.news.news
});

class Front extends Component {
  componentDidMount() {
    this.props.getNews();
  }

  render() {
    const { news } = this.props;
    return (
      <Layout>
        <article>
          <h3>Tiedotteet</h3>
          {news &&
            news.map(newsPost => (
              <div key={newsPost.id} className="card">
                {newsPost.content}
              </div>
            ))}
        </article>
      </Layout>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Front);
