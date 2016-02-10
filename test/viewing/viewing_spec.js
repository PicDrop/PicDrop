import { Map, Set, List, fromJS } from 'immutable';
import { expect } from 'chai';

import reducer from '../../client/reducers/viewingReducer';

describe('reducer', () => {
  it('handles SET_VIEWING_STATE', () => {
    const initialState = Map();
    const action = {
      type: 'SET_VIEWING_STATE',
      state: new Map({
        username: 'testUser',
        currentFolder: '',
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
      currentFolder: '',
      currentFolderPics: new Map(),
      currentTags: new Set(),
      currentTagsPics: new Map(),
      currentCollection: new Set(),
      currentImage: '1',
    }));
  });

  it('handles FOLDER_SELECTED', () => {
    const initialState = new Map({
      username: 'testUser',
      currentFolder: '',
      currentFolderPics: new Map(),
      currentTags: new Set(),
      currentTagsPics: new Map(),
      currentCollection: new Set(),
      currentImage: '1',
    });
    const action = {
      type: 'FOLDER_SELECTED',
      payload: {
        folderName: 'myFolder',
        folderObj: new Map({
          f1: true,
          f2: true,
          f3: true,
        }),
      },
    };
    const nextState = reducer(initialState, action);
    expect(nextState).to.equal(fromJS({
      username: 'testUser',
      currentFolder: 'myFolder',
      currentFolderPics: new Map({
        f1: true,
        f2: true,
        f3: true,
      }),
      currentTags: new Set(),
      currentTagsPics: new Map(),
      currentCollection: List.of('f1', 'f2', 'f3'),
      currentImage: '1',
    }));
  });

  it('handles SELECT_TAG', () => {
    const initialState = new Map({
      username: 'testUser',
      currentFolder: '',
      currentFolderPics: new Map(),
      currentTags: new Set(),
      currentTagsPics: new Map(),
      currentCollection: new Set(),
      currentImage: '1',
    });
    const action = {
      type: 'SELECT_TAG',
      payload: {
        tagName: 'myTag',
        tagObj: new Map({
          t1: true,
          t2: true,
          t3: true,
        }),
      },
    };
    const nextState = reducer(initialState, action);
    expect(nextState).to.equal(fromJS({
      username: 'testUser',
      currentFolder: '',
      currentFolderPics: new Map(),
      currentTags: Set.of('myTag'),
      currentTagsPics: new Map({
        t1: true,
        t2: true,
        t3: true,
      }),
      currentCollection: List.of('t1', 't2', 't3'),
      currentImage: '1',
    }));
  });
});
