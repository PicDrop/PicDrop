import { createStore } from 'redux';
import reducer from './reducers/index';
import appActions from './actions/appActions';
import defaultState from './defaultState';

const store = createStore(reducer);
store.dispatch(appActions.setState(defaultStateImmut));

export default store;
