import { Map } from 'immutable';

//const viewingReducer = (state = new Map(), action) => {
const viewingReducer = (state = null, action) => {
  switch (action.type) {
/*    case 'SET_STATE':
      return state.merge(action.state);*/
    case 'FOLDER_SELECTED':
      //return state.merge(action.payload);
      console.log(action);
      return action.payload;
    default:
      console.log(action);
      return state;
  }
};

export default viewingReducer;
