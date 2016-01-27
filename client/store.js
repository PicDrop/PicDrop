import { createStore } from 'redux';
import Immutable from 'immutable';
import masterReducer from './reducer';
import actions from './actions';
import defaultState from './defaultState';

const defaultStateImmut = Immutable.fromJS(defaultState);

console.log(defaultStateImmut);

const store = createStore(masterReducer);
store.dispatch(actions.setState(defaultStateImmut));

export default store;
