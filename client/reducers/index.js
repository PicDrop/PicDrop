import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import folders from './foldersReducer';
import tags from './tagsReducer';
import userPics from './userPicsReducer';
import viewing from './viewingReducer';
import app from './appReducer';
import profile from './profileReducer';

const reducer = combineReducers({
  profile,
  app,
  folders,
  tags,
  userPics,
  viewing,
  form,
  profile,
});

export default reducer;
