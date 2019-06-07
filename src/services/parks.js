import axios from "axios";

const { REACT_APP_API_URL } = process.env;

export default {
  getParks: async () => {
    return axios
      .get(`http://api.retkeily.info/parks`)
      .then(r => r.data)
      .catch(function(error) {
        return null;
      });
  }
};
