import { Map } from 'immutable';

const userPicsReducer = (state = new Map(), action) => {
  switch (action.type) {
    case 'SET_STATE':
      return state.merge(action.state);
    default:
      return state;
  }
};

export default userPicsReducer;
