import React, { Component } from "react";
import { connect } from "react-redux";
import Select from "react-select";
import FlashMassage from "react-flash-message";
import Moment from "react-moment";
import "moment/locale/fi";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Formik } from "formik";
import * as Yup from "yup";

import Layout from "../Layout";
import { createNews, fetchNews } from "../../ducks/news";
import { fetchParks } from "../../ducks/parks";

const mapDispatchToProps = dispatch => ({
  getNews: () => dispatch(fetchNews()),
  addNews: values => dispatch(createNews(values)),
  getParks: () => dispatch(fetchParks())
});

const mapStateToProps = state => ({
  news: state.news.news,
  parks: state.parks.parks,
  user: state.account.user
});

class Front extends Component {
  state = {
    selectedOption: null,
    showNewsForm: false,
    showFlashMessage: false
  };

  handleShowForm = () => {
    this.setState({ showNewsForm: true, showFlashMessage: false });
  };

  handleChangePark = selectedOption => {
    this.setState({ selectedOption });
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.getNews();
    this.props.getParks();
  }

  render() {
    const { news, parks, user, addNews, getNews } = this.props;
    const { selectedOption, showNewsForm, showFlashMessage } = this.state;

    return (
      <Layout>
        <article>
          <div className="page-title-container">
            <h3>Tiedotteet</h3>
          </div>

          {!showNewsForm && user && (
            <div className="new-entry-button">
              <Button onClick={this.handleShowForm} variant="contained">
                Lähetä tiedote
              </Button>
            </div>
          )}

          {showFlashMessage && (
            <FlashMassage duration={5000} persistOnHover={true}>
              <div className="flash-success">
                <p>Tiedote tallennettu.</p>
              </div>
            </FlashMassage>
          )}

          {showNewsForm && (
            <div className="card form-card">
              <h4>Uusi tiedote</h4>
              <div className="form">
                <Formik
                  initialValues={{
                    trail: "",
                    area: "",
                    content: ""
                  }}
                  onSubmit={(values, { setSubmitting }) => {
                    values.author = this.props.user.external_id;
                    values.park = this.state.selectedOption
                      ? this.state.selectedOption.value
                      : "";

                    addNews(values).then(() => {
                      getNews();
                    });

                    setSubmitting(false);

                    this.setState({
                      selectedOption: null,
                      showNewsForm: false,
                      showFlashMessage: true
                    });
                  }}
                  validationSchema={Yup.object().shape({
                    content: Yup.string().required("Required")
                  })}
                >
                  {props => {
                    const {
                      values,
                      touched,
                      errors,
                      isSubmitting,
                      handleChange,
                      handleBlur,
                      handleSubmit
                    } = props;

                    return (
                      <form onSubmit={handleSubmit}>
                        {!selectedOption && (
                          <div className="form-note">
                            Valitse ensin kansallispuisto tai muu ulkoilualue.
                          </div>
                        )}
                        {selectedOption && (
                          <div className="form-note">
                            Syötä loput tiedot ja paina lopuksi "Lähetä
                            tiedote"-painiketta.
                          </div>
                        )}
                        <Select
                          id="park"
                          className="select-box"
                          placeholder="Kansallispuisto / Ulkoilualue"
                          value={selectedOption}
                          onBlur={handleBlur}
                          onChange={this.handleChangePark}
                          options={parks}
                        />
                        {errors.park && touched.park && (
                          <div className="form-validation-error">
                            Valitse puisto tai alue!
                          </div>
                        )}

                        {selectedOption && (
                          <div>
                            <TextField
                              id="trail"
                              label="Polku tai reitti"
                              margin="normal"
                              fullWidth
                              variant="outlined"
                              value={values.trail}
                              onBlur={handleBlur}
                              onChange={handleChange}
                            />
                            <TextField
                              id="area"
                              label="Leirintäalue tai muu paikka"
                              margin="normal"
                              fullWidth
                              variant="outlined"
                              value={values.area}
                              onBlur={handleBlur}
                              onChange={handleChange}
                            />
                            <TextField
                              id="content"
                              label="Tiedote"
                              margin="normal"
                              fullWidth
                              multiline
                              variant="outlined"
                              value={values.content}
                              onBlur={handleBlur}
                              onChange={handleChange}
                            />
                            {errors.content && touched.content && (
                              <div className="form-validation-error">
                                Tiedotteessa pitää olla sisältöä!
                              </div>
                            )}

                            <div className="form-controls">
                              <Button
                                type="submit"
                                disabled={isSubmitting}
                                variant="contained"
                              >
                                Lähetä tiedote
                              </Button>
                            </div>
                          </div>
                        )}
                      </form>
                    );
                  }}
                </Formik>
              </div>
            </div>
          )}
          {news &&
            typeof news === "object" &&
            news.map(newsPost => (
              <div key={newsPost.id} className="card">
                <div className="post-container">
                  <div className="left">
                    <div className="picture">
                      <img alt="avatar" src={newsPost.picture_url} />
                    </div>
                    <div className="author">{newsPost.author}</div>
                    <div className="timestamp">
                      <div className="post-data">
                        <i className="material-icons">date_range</i>
                        <Moment locale="fi" format="LL">
                          {newsPost.created_at}
                        </Moment>
                      </div>
                      <div className="post-data">
                        <i className="material-icons">access_time</i>
                        <Moment locale="fi" format="LT">
                          {newsPost.created_at}
                        </Moment>
                      </div>
                    </div>
                  </div>
                  <div className="right">
                    <div className="park">{newsPost.park}</div>
                    <div className="trail-area">
                      {newsPost.trail}, {newsPost.area}
                    </div>
                    <div className="content">
                      {newsPost.content.split("\n").map((text, key) => {
                        return <p key={key}>{text}</p>;
                      })}
                    </div>
                  </div>
                </div>
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
