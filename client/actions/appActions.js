const appActions = {
  setState: (newState) => {
    return {
      type: 'SET_STATE',
      state: newState,
    };
  },
};

export default appActions;
