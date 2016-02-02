import { Map, List } from 'immutable';

const populateCurrentCollection = (state) => {
  if(state.get('currentTagsPics').size) {
    if(state.get('currentFolderPics').size) {
      //find intersection of folder and tag
    }
    //if tags, no folder, set current to all tags pics
  } else if(state.get('currentFolderPics').size) {
    //set current viewing to equal list of pics in currFolderPics
    var newList = new List();
    state.get('currentFolderPics').map((val, key) => {
      newList = newList.push(key);
    });
    return state.set('currentCollection', newList);
  }
};

const updateCurrentFolder = (state, folder) => {
  const newState =  state.set('currentFolder', folder.folderName).set('currentFolderPics', folder.folderObj);
  return populateCurrentCollection(newState);
}

const viewingReducer = (state = new Map(), action) => {
//const viewingReducer = (state = null, action) => {
  switch (action.type) {
/*    case 'SET_STATE':
      return state.merge(action.state);*/
    case 'FOLDER_SELECTED':
      //console.log(populateCurrentCollection(state, action.payload));
      return updateCurrentFolder(state, action.payload);
    default:
      console.log(action);
      return state;
  }
};


export default viewingReducer;
