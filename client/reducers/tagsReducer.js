import { Map, List } from 'immutable';

const addPic = (state, info) => {
  const newState = state.setIn([info.tag, info.picId], true);
  return newState;
};
const removePic = (state, info) => {
  return info.tags.reduce((newState, tag) => {
    return newState.deleteIn([tag, info.picId]);
  }, state);
};

const tagsReducer = (state = new Map(), action) => {
  switch (action.type) {
    case 'SET_TAGS_STATE':
      return state.merge(action.state);
    case 'ADD_PIC_TO_TAG':
      return addPic(state, action.state);
    case 'REMOVE_PIC_TAGS':
      return removePic(state, action.info);
    default:
      return state;
  }
};

export default tagsReducer;
