import React, { Component } from "react";
import { connect } from "react-redux";

import Layout from "../Layout";
import { fetchNews } from "../../ducks/news";

const mapDispatchToProps = dispatch => ({
  getNews: () => dispatch(fetchNews())
});

const mapStateToProps = state => ({
  news: state.news.news
});

class Front extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.getNews();
  }

  render() {
    const { news } = this.props;
    return (
      <Layout>
        <article>
          <div className="page-title-container">
            <h3>Tiedotteet</h3>
          </div>
          {news &&
            typeof news === "object" &&
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
