import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose
} from 'redux';

import { routerReducer, routerMiddleware } from 'react-router-redux';

import reducers from './reducers/index';

export const configureStore = (history, initialState) => {
  const reducer = combineReducers({
    ...reducers,
    routing: routerReducer,
  });

  const middlewares = [];

  const store = createStore(
    reducer,
    initialState,
    compose(
      applyMiddleware(...middlewares, routerMiddleware(history))
    )
  );

  return store;

};
