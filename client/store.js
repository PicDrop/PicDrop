import { createStore, applyMiddleware, compose } from 'redux';
// import { persistState } from 'redux-devtools';
import reducer from './reducers';
// import createLogger from 'redux-logger';
// import DevTools from './devTools/devTools';
import initialState from './defaultState';
// const logger = createLogger();

// const finalCreateStore = compose(
//   applyMiddleware(logger),
//   DevTools.instrument(),
//   persistState(
//     window.location.href.match(
//       /[?&]debug_session=([^&]+)\b/
//     )
//   )
// )(createStore);

// export default function configureStore(initialState) {
//   const store = finalCreateStore(reducer, initialState);

//   if (module.hot) {
//     module.hot.accept('./reducers', () =>
//       store.replaceReducer(require('./reducers').default)
//     );
//   }

//   return store;
// }
// const buildStore = () => createStore(reducer);

export default createStore(reducer, initialState);
