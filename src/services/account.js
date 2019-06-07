import axios from "axios";

//const { REACT_APP_API_URL } = process.env;
const REACT_APP_API_URL = "http://api.retkeily.info";

export default {
  convertFacebookData: account => {
    const data = {
      external_id: account.userID,
      name: account.name,
      email: account.email,
      picture_url: account.picture.data.url
    };

    localStorage.setItem("retkeily-info-account", JSON.stringify(data));

    return data;
  },

  convertGoogleData: account => {
    const data = {
      external_id: account.profileObj.googleId,
      name: account.profileObj.name,
      email: account.profileObj.email,
      picture_url: account.profileObj.imageUrl
    };

    localStorage.setItem("retkeily-info-account", JSON.stringify(data));

    return data;
  },

  addAccount: async data => {
    return axios
      .post(`${REACT_APP_API_URL}/accounts`, data)
      .catch(function(error) {
        return null;
      });
  }
};
