import axios from "axios";

//const { REACT_APP_API_URL } = process.env;
const REACT_APP_API_URL = "http://api.retkeily.info";

export default {
  getParks: async () => {
    return axios
      .get(`${REACT_APP_API_URL}/parks`)
      .then(r => r.data)
      .catch(function(error) {
        return null;
      });
  }
};
