import { Map } from 'immutable';

const foldersReducer = (state = new Map(), action) => {
  switch (action.type) {
    case 'SET_STATE':
      return state.mergeDeep(action.state);
    default:
      return state;
  }
};

export default foldersReducer;
