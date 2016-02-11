const userPicsActions = {
  setState: (newState) => {
    return {
      type: 'SET_PICS_STATE',
      state: newState,
    };
  },
  addTagToPic: (tag, picId) => {
    return {
      type: 'ADD_TAG_TO_PIC',
      state: { tag, picId },
    };
  },
  deletePic: (picId) => {
    return {
      type: 'DELETE_PIC',
      picId,
    };
  },
};

export default userPicsActions;
