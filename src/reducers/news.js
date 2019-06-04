export default (state = { news: null }, action) => {
  switch (action.type) {
    case "SET_NEWS":
      return {
        news: action.payload
      };
    default:
      return state;
  }
};
