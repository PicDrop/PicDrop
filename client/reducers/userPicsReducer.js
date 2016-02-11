import { Map, List } from 'immutable';

const addTag = (state, info) => {
  const picsTags = state.getIn([info.picId, 'tags']);
  if (picsTags.includes(info.tag)) return state;
  const newState = state.updateIn([info.picId, 'tags'], tags => tags.push(info.tag));
  return newState;
};
const deletePic = (state, picId) => {
  return state.delete(picId);
};

const userPicsReducer = (state = new Map(), action) => {
  switch (action.type) {
    case 'SET_PICS_STATE':
      return state.merge(action.state);
    case 'ADD_TAG_TO_PIC':
      return addTag(state, action.state);
    case 'DELETE_PIC':
      return deletePic(state, action.picId);
    default:
      return state;
  }
};

export default userPicsReducer;
