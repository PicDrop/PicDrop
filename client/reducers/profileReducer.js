import { Map } from 'immutable';

const profileReducer = (state = new Map(), action) => {
  switch (action.type) {
    case 'SET_PROFILE_STATE':
      return state.merge(action.state);
    default:
      return state;
  }
};

export default profileReducer;
