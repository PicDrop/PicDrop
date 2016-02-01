const appActions = {
  setState: (newState) => {
    return {
      type: 'SET_STATE',
      state: newState,
    };
  },
  setLoggedIn: (loggedIn) => {
    return {
      type: 'SET_LOGGED_IN',
      loggedIn,
    };
  },
};

export default appActions;
