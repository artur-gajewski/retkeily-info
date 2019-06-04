import axios from "axios";

const { REACT_APP_API_URL } = process.env;

export function fetchNews() {
  return axios
    .get(`${REACT_APP_API_URL}/news`)
    .then(function(response) {
      return response.data;
    })
    .catch(function(error) {
      console.log(error);
    });
}
