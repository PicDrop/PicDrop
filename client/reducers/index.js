import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import folders from './foldersReducer';
import tags from './tagsReducer';
import userPics from './userPicsReducer';
import viewing from './viewingReducer';
import app from './appReducer';

const reducer = combineReducers({
  app,
  folders,
  tags,
  userPics,
  viewing,
  form,
});

export default reducer;
