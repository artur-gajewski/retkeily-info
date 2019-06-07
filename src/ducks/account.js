import { createAction } from "redux-actions";
import accountService from "../services/account";

export const loginFacebookUser = createAction(
  "LOGIN_FACEBOOK_USER",
  account => {
    const data = accountService.convertFacebookData(account);
    return accountService.addAccount(data).then(data);
  }
);

export const loginGoogleUser = createAction("LOGIN_GOOGLE_USER", account => {
  const data = accountService.convertGoogleData(account);
  return accountService.addAccount(data).then(data);
});

export const getUserAndLogin = createAction("GET_USER_AND_LOGIN", () => {
  const userData = localStorage.getItem("retkeily-info-account");

  return userData ? JSON.parse(userData) : null;
});

export const logoutUser = createAction("LOGOUT_USER", () => {
  localStorage.setItem("retkeily-info-account", null);
  return null;
});

const defaultState = {
  user: null
};

export default (state = defaultState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "LOGIN_FACEBOOK_USER":
      return {
        user: payload
      };
    case "LOGIN_GOOGLE_USER":
      return {
        user: payload
      };
    case "GET_USER_AND_LOGIN":
      return {
        user: payload
      };
    case "LOGOUT_USER":
      return {
        user: payload
      };
    default:
      return state;
  }
};
