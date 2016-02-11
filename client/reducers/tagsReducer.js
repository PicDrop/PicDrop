import { Map } from 'immutable';

const addPic = (state, info) => {
  const newState = state.setIn([info.tag, info.picId], true);
  return newState;
};

const tagsReducer = (state = new Map(), action) => {
  switch (action.type) {
    case 'SET_TAGS_STATE':
      return state.merge(action.state);
    case 'ADD_PIC_TO_TAG':
      return addPic(state, action.state);
    default:
      return state;
  }
};

export default tagsReducer;
