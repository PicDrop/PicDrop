import { createStore } from 'redux';
import reducer from './reducers/index';
import initiateStore from './defaultState';

const store = createStore(reducer);
initiateStore(store.dispatch);


export default store;
