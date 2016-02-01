/*const viewingActions = {
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
  }
};*/
function viewingActions(folder) {
  console.log(folder);
  return {
    type: 'FOLDER_SELECTED',
    payload: folder,
  };
}

const selectBook = (book) => {
  return {
    type: 'BOOK_SELECTED',
    payload: book
  }
}

export default viewingActions;
