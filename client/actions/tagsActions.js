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
  removePic: (tags, picId) => {
    return {
      type: 'REMOVE_PIC_TAGS',
      info: { tags, picId },
    };
  },
};

export default tagsActions;
