export default (state = { user: null }, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      return {
        user: action.payload
      };
    case "LOGOUT_USER":
      return {
        user: null
      };
    default:
      return state;
  }
};
