export default (state = { result: "Initial value" }, action) => {
  switch (action.type) {
    case "TEST_REDUX_ACTION":
      return {
        result: action.payload
      };
    default:
      return state;
  }
};
