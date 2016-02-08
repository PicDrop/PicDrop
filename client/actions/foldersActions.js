const foldersActions = {
  setState: (newState) => {
    return {
      type: 'SET_FOLDERS_STATE',
      state: newState,
    };
  },
};

export default foldersActions;
