import { createStore } from 'redux';
import Immutable from 'immutable';
import reducer from './reducers/index';
import appActions from './actions/appActions';
import defaultState from './defaultState';

const defaultStateImmut = Immutable.fromJS(defaultState);

const store = createStore(reducer);
store.dispatch(appActions.setState(defaultStateImmut));

export default store;
