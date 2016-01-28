import { combineReducers } from 'redux';
import app from './appReducer';
import folders from './foldersReducer';
import tags from './tagsReducer';
import userPics from './userPicsReducer';
import viewing from './viewingReducer';

export default combineReducers({
  app,
  folders,
  tags,
  userPics,
  viewing
});
