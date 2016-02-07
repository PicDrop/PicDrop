import { Map, List, Set } from 'immutable';

const populateCurrentCollection = (state) => {
  if (state.get('currentTagsPics').size) {
    if (state.get('currentFolderPics').size) {
      // find intersection of folder and tag
      const folderSet = Set.fromKeys(state.get('currentFolderPics'));
      const tagsSet = Set.fromKeys(state.get('currentTagsPics'));
      //console.log('intersect', tagsSet.intersect(folderSet));
      const folderTagIntersect = tagsSet.intersect(folderSet)
      return state.set('currentCollection', folderTagIntersect);
    }
    // if tags, no folder, set current to all tags pics
    let tagOnlyList = new List();
    state.get('currentTagsPics').map((val, key) => {
      console.log(key);
      tagOnlyList = tagOnlyList.push(key);
    });
    return state.set('currentCollection', tagOnlyList);

  } else if (state.get('currentFolderPics').size) {
    // set current viewing to equal list of pics in currFolderPics
    let folderOnlyList = new List();
    state.get('currentFolderPics').map((val, key) => {
      folderOnlyList = folderOnlyList.push(key);
    });
    return state.set('currentCollection', folderOnlyList);
  } else {
    //if nothing is selected, return empty collection
    return state.set('currentCollection', new Map());
  }
};

const updateCurrentFolder = (state, folder) => {
  console.log(state.get('currentFolder'));
  var newState = {};
  // folder is already selected -- deselect it
  if (state.get('currentFolder') === folder.folderName) {
    newState = state.set('currentFolder', '').set('currentFolderPics', new Map());
  } else {
    newState = state.set('currentFolder', folder.folderName).set('currentFolderPics', folder.folderObj);
  }
  console.log(newState);
  return populateCurrentCollection(newState);
}

const updateCurrentTags = (state, tag) => {
  let currentTags = state.get('currentTags');
  let currentTagsPics = state.get('currentTagsPics');
  // Empty currentTags
  if (!currentTags) {
    currentTags = state.set('currentTags', tag.tagName);
  }
  // Empty currentTagsPics
  if (!currentTagsPics) {
    currentTagsPics = state.set('currentTagsPics', tag.tagObj);
  }

  // Tag is already selected -- deselect it
  if (currentTags.has(tag.tagName)) {
    currentTags = currentTags.delete(tag.tagName);
    // Remove items that are in the clicked tags
    currentTagsPics = currentTagsPics.filter((val, key) => Array.from(tag.tagObj.keys()).indexOf(key) === -1);
  } else {
    currentTags = currentTags.concat(tag.tagName);
    currentTagsPics = currentTagsPics.concat(tag.tagObj);
  }
  const newState = state.set('currentTags', currentTags).set('currentTagsPics', currentTagsPics);
  console.log(newState);
  //const newState = state.set('currentTags', tag.tagName).set('currentTagsPics', tag.tagObj);
  return populateCurrentCollection(newState);
  //return newState;
}

const viewingReducer = (state = new Map(), action) => {
  switch (action.type) {
    case 'SET_STATE':
      return state.mergeDeep(action.state);
    case 'FOLDER_SELECTED':
      return updateCurrentFolder(state, action.payload);
    case 'SELECT_TAG':
      return updateCurrentTags(state, action.payload);
    default:
      console.log(action);
      return state;
  }
};

export default viewingReducer;
