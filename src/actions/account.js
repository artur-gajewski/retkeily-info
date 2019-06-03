export const loginFacebookUser = account => dispatch => {
  const data = {
    id: account.userID,
    name: account.name,
    email: account.email,
    pictureUrl: account.picture.data.url
  };

  localStorage.setItem("retkeily-info-account", JSON.stringify(data));

  dispatch({
    type: "LOGIN_USER",
    payload: data
  });
};

export const loginGoogleUser = account => dispatch => {
  const data = {
    id: account.profileObj.googleId,
    name: account.profileObj.name,
    email: account.profileObj.email,
    pictureUrl: account.profileObj.imageUrl
  };

  localStorage.setItem("retkeily-info-account", JSON.stringify(data));

  dispatch({
    type: "LOGIN_USER",
    payload: data
  });
};

export const getUserAndLogin = () => dispatch => {
  const userData = localStorage.getItem("retkeily-info-account");

  if (userData) {
    dispatch({
      type: "LOGIN_USER",
      payload: JSON.parse(userData)
    });
  }
};

export const logoutUser = () => dispatch => {
  localStorage.setItem("retkeily-info-account", null);

  dispatch({
    type: "LOGOUT_USER"
  });
};
