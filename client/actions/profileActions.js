const profileActions = {
  setState: (newState) => {
    return {
      type: 'SET_PROFILE_STATE',
      state: newState,
    };
  },
};

export default profileActions;
