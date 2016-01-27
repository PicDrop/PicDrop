import defaultState from './defaultState';

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_STATE':
      return action.state;
    default:
      return state;
  }
};

export default reducer;
