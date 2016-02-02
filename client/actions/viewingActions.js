const viewingActions = {
  setState: (newState) => {
    return {
      type: 'SET_STATE',
      state: newState,
    };
  },

  selectFolder: (folder) => {
    return {
      type: 'FOLDER_SELECTED',
      payload: folder
    };
  },

  selectTag: (tag) => {
    return {
      type: 'SELECT_TAG',
      payload: tag
    };
  },

};
/*function viewingActions(folder) {
  console.log(folder);
  return {
    type: 'FOLDER_SELECTED',
    payload: folder,
  };
}*/

export default viewingActions;
