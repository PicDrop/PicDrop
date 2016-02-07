import { Map } from 'immutable';

const profileReducer = (state = new Map(), action) => {
  switch (action.type) {
    case 'SET_PROFILE_STATE':
      return state.merge(action.state);
    case 'SET_STATE':
      return state.mergeDeep(action.state);
    case 'GET_PROFILE':
      return state.mergeDeep(action.payload.data);
    case 'SET_PROFILE':
      return state.mergeDeep(action.payload.data);
    default:
      return state;
  }
};

export default profileReducer;

