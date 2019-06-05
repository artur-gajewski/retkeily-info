import React, { Component } from "react";
import { connect } from "react-redux";
import Select from "react-select";
import { Redirect } from "react-router-dom";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Formik } from "formik";
import * as Yup from "yup";

import Layout from "../Layout";
import { fetchNews } from "../../ducks/news";
import { fetchParks } from "../../ducks/parks";

const mapDispatchToProps = dispatch => ({
  getNews: () => dispatch(fetchNews()),
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
    showNewsForm: false
  };

  handleShowForm = () => {
    this.setState({ showNewsForm: true });
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
    const { news, parks, user } = this.props;
    const { selectedOption, showNewsForm } = this.state;

    return (
      <Layout>
        <article>
          <div className="page-title-container">
            <h3>Tiedotteet</h3>
          </div>

          {!showNewsForm && user && (
            <Button onClick={this.handleShowForm} variant="contained">
              Lähetä tiedote
            </Button>
          )}

          {showNewsForm && (
            <div className="card">
              <h4>Uusi tiedote</h4>
              <div className="form">
                <Formik
                  initialValues={{
                    trail: "",
                    area: "",
                    content: ""
                  }}
                  onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                      values.park = this.state.selectedOption
                        ? this.state.selectedOption.value
                        : "";
                      alert(JSON.stringify(values, null, 2));
                      this.props.getNews();
                      setSubmitting(false);
                      this.setState({
                        selectedOption: null,
                        showNewsForm: false
                      });
                    }, 500);
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
                            Valitse ensin kansallisupuisto tai muu ulkoilualue.
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
