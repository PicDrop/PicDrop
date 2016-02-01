import { Map, List } from 'immutable';
import foldersActions from './actions/foldersActions';
import tagsActions from './actions/tagsActions';
import userPicsActions from './actions/userPicsActions';
import viewingActions from './actions/viewingActions';
import appActions from './actions/appActions';

const userPics = new Map({
  '09sjdfoins0d9fhj09': new Map({
    id: '09sjdfoins0d9fhj09',
    storageId: 'storageId#',
    originalUrl: 'http://placehold.it/650x650',
    folder: 'seperateFolder',
    'tags': ['seperateTag', 'overlapTag'],
    title: 'My Picture',
    status: false,
    domain: 'http://exampleURL.com',
    thumbnail: 'http://placehold.it/200x150'
  }),
  'fh165d46h84dhd3f25h1': new Map({
    id: 'fh165d46h84dhd3f25h1',
    storageId: 'storageId#',
    originalUrl: 'http://placehold.it/650x650',
    folder: 'myFolder',
    'tags': ['myTag'],
    title: 'My Picture',
    status: false,
    domain: 'http://exampleURL.com',
    thumbnail: 'http://placehold.it/200x150'
  }),
  'gfh6857gdf9h6854df3gsdf': new Map({
    id: 'gfh6857gdf9h6854df3gsdf',
    storageId: 'storageId#',
    originalUrl: 'http://placehold.it/650x650',
    folder: 'seperateFolder',
    'tags': ['seperateTag'],
    title: 'My Picture',
    status: false,
    domain: 'http://exampleURL.com',
    thumbnail: 'http://placehold.it/200x150'
  }),
  'sa6g54a69s8g4sd5f1': new Map({
    id: 'sa6g54a69s8g4sd5f1',
    storageId: 'storageId#',
    originalUrl: 'http://placehold.it/650x650',
    folder: 'myFolder',
    'tags': ['myTag', 'overlapTag'],
    title: 'My Picture',
    status: false,
    domain: 'http://exampleURL.com',
    thumbnail: 'http://placehold.it/200x150'
  }),
  'sa6g54a69s8g4sd5f2': new Map({
    id: 'sa6g54a69s8g4sd5f1',
    storageId: 'storageId#',
    originalUrl: 'http://placehold.it/650x650',
    folder: 'myFolder',
    'tags': ['myTag', 'overlapTag'],
    title: 'My Picture',
    status: false,
    domain: 'http://exampleURL.com',
    thumbnail: 'http://placehold.it/200x150'
  }),
  'sa6g54a69s8g4sd5f3': new Map({
    id: 'sa6g54a69s8g4sd5f1',
    storageId: 'storageId#',
    originalUrl: 'http://placehold.it/650x650',
    folder: 'myFolder',
    'tags': ['myTag', 'overlapTag'],
    title: 'My Picture',
    status: false,
    domain: 'http://exampleURL.com',
    thumbnail: 'http://placehold.it/200x150'
  })
});

const tags = new Map({
  myTag: new Map({
    'sa6g54a69s8g4sd5f1': true,
    'fh165d46h84dhd3f25h1': true
  }),
  seperateTag: new Map({
    'gfh6857gdf9h6854df3gsdf': true,
    '09sjdfoins0d9fhj09': true
  }),
  overlapTag: new Map({
    'sa6g54a69s8g4sd5f1': true,
    '09sjdfoins0d9fhj09': true,
  })
});

const folders = new Map({
  myFolder: new Map({
    'sa6g54a69s8g4sd5f1': true,
    'fh165d46h84dhd3f25h1': true,
  }),
  seperateFolder: new Map({
    'gfh6857gdf9h6854df3gsdf': true,
    '09sjdfoins0d9fhj09': true,
  }),
});

const viewing = new Map({
  username: 'testUser',
  currentFolder: null,
  currentTags: new List(),
  currentCollection: List.of('09sjdfoins0d9fhj09', 'gfh6857gdf9h6854df3gsdf', 'fh165d46h84dhd3f25h1', 'sa6g54a69s8g4sd5f1'),
  currentImage: '09sjdfoins0d9fhj09',
});

const app = new Map({
  loggedIn: false
});

const initialState = {
  userPics,
  folders,
  tags,
  viewing,
  app,
};

export default initialState;
