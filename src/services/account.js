export default {
  convertFacebookData: account => {
    const data = {
      id: account.userID,
      name: account.name,
      email: account.email,
      pictureUrl: account.picture.data.url
    };

    localStorage.setItem("retkeily-info-account", JSON.stringify(data));

    return data;
  },

  convertGoogleData: account => {
    const data = {
      id: account.profileObj.googleId,
      name: account.profileObj.name,
      email: account.profileObj.email,
      pictureUrl: account.profileObj.imageUrl
    };

    localStorage.setItem("retkeily-info-account", JSON.stringify(data));

    return data;
  }
};
