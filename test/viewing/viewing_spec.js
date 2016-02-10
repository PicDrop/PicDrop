import { Map, Set, fromJS } from 'immutable';
import { expect } from 'chai';

import reducer from '../../client/reducers/viewingReducer';

describe('reducer', () => {
  it('handles SET_VIEWING_STATE', () => {
    const initialState = Map();
    const action = {
      type: 'SET_VIEWING_STATE',
      state: new Map({
        username: 'testUser',
        currentFolder: 'folder',
        currentFolderPics: new Map(),
        currentTags: new Set(),
        currentTagsPics: new Map(),
        currentCollection: new Set(),
        currentImage: '1',
      }),
    };
    const nextState = reducer(initialState, action);
    expect(nextState).to.equal(fromJS({
      username: 'testUser',
      currentFolder: 'folder',
      currentFolderPics: new Map(),
      currentTags: new Set(),
      currentTagsPics: new Map(),
      currentCollection: new Set(),
      currentImage: '1',
    }));
  });

  it('handles FOLDER_SELECTED', () => {

  })

});
