const userPicsActions = {
  setState: (newState) => {
    return {
      type: 'SET_PICS_STATE',
      state: newState,
    };
  },
};

export default userPicsActions;
