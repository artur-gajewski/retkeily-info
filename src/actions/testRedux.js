export const testRedux = () => dispatch => {
  dispatch({
    type: "TEST_REDUX_ACTION",
    payload: "WORKS FINE!"
  });
};
