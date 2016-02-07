import { Map } from 'immutable';

const tagsReducer = (state = new Map(), action) => {
  switch (action.type) {
    case 'SET_STATE':
      return state.mergeDeep(action.state);
    default:
      return state;
  }
};

export default tagsReducer;
