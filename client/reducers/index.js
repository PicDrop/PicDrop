import { combineReducers } from 'redux';
import folders from './foldersReducer';
import tags from './tagsReducer';
import userPics from './userPicsReducer';
import viewing from './viewingReducer';

const reducer = combineReducers({
  folders,
  tags,
  userPics,
  viewing
});

export default reducer;
