const tagsActions = {
  setState: (newState) => {
    return {
      type: 'SET_TAGS_STATE',
      state: newState,
    };
  },
  addPicToTag: (tag, picId) => {
    return {
      type: 'ADD_PIC_TO_TAG',
      state: { tag, picId },
    };
  },
};

export default tagsActions;
