const foldersActions = {
  setState: (newState) => {
    return {
      type: 'SET_FOLDERS_STATE',
      state: newState,
    };
  },
  removePic: (folderName, picId) => {
    return {
      type: 'REMOVE_PIC_FOLDER',
      info: { folderName, picId },
    };
  },
};

export default foldersActions;
