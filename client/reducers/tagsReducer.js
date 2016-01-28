import defaultState from './defaultState';

const addTag = (state, tags) => {
  
}


const tagsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_TAG":
      return addTag(state, action.tags);
    default:
      return state;
  }
};

export default tagsReducer;
