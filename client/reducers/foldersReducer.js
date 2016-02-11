import { Map, List } from 'immutable';

const removePic = (state, info) => {
  return state.deleteIn([info.folderName, info.picId]);
};

const foldersReducer = (state = new Map(), action) => {
  switch (action.type) {
    case 'SET_FOLDERS_STATE':
      return state.merge(action.state);
    case 'REMOVE_PIC_FOLDER':
      return removePic(state, action.info);
    default:
      return state;
  }
};

export default foldersReducer;
