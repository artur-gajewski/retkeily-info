import React, { Component } from "react";
import { connect } from "react-redux";
import Select from "react-select";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import Layout from "../Layout";
import { fetchNews } from "../../ducks/news";
import { fetchParks } from "../../ducks/parks";

const mapDispatchToProps = dispatch => ({
  getNews: () => dispatch(fetchNews()),
  getParks: () => dispatch(fetchParks())
});

const mapStateToProps = state => ({
  news: state.news.news,
  parks: state.parks.parks
});

class Front extends Component {
  state = {
    selectedOption: null
  };

  handleChange = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.getNews();
    this.props.getParks();
  }

  render() {
    const { news, parks } = this.props;
    const { selectedOption } = this.state;

    return (
      <Layout>
        <article>
          <div className="page-title-container">
            <h3>Tiedotteet</h3>
          </div>

          <div className="card">
            <h4>Uusi tiedote</h4>

            <div className="form">
              <Select
                className="select-box"
                placeholder="Puisto / Alue"
                value={selectedOption}
                onChange={this.handleChange}
                options={parks}
              />

              <TextField
                id="trail"
                label="Polku tai reitti"
                margin="normal"
                fullWidth
                variant="outlined"
              />

              <TextField
                id="area"
                label="Leirintäalue tai muu paikka"
                margin="normal"
                fullWidth
                variant="outlined"
              />

              <TextField
                id="content"
                label="Tiedote"
                margin="normal"
                fullWidth
                multiline
                variant="outlined"
              />

              <div className="form-controls">
                <Button variant="contained">Lähetä tiedote</Button>
              </div>
            </div>
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
