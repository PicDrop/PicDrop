import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducers';
// import { persistState } from 'redux-devtools';
// import createLogger from 'redux-logger';
// import DevTools from './devTools/devTools';
import initialState from './defaultState';

// const logger = createLogger();
//
// const finalCreateStore = compose(
//   applyMiddleware(logger),
//   DevTools.instrument(),
//   persistState(
//     window.location.href.match(
//       /[?&]debug_session=([^&]+)\b/
//     )
//   )
// )(createStore);
//
// export default function configureStore(initialState) {
//   const store = finalCreateStore(reducer, initialState);
//
//   if (module.hot) {
//     module.hot.accept('./reducers', () =>
//       store.replaceReducer(require('./reducers').default)
//     );
//   }
//
//   return store;
// }

export default createStore(reducer, initialState);
