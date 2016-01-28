const viewingActions = {
  setState: (newState) => {
    return {
      type: 'SET_STATE',
      state: newState,
    };
  },
};

export default viewingActions;
