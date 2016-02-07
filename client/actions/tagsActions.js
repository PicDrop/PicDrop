const tagsActions = {
  setState: (newState) => {
    return {
      type: 'SET_TAGS_STATE',
      state: newState,
    };
  },
};

export default tagsActions;
