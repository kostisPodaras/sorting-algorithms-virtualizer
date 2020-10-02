import { applyMiddleware, createStore as reduxCreateStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension';

import { createHistory, routerMiddleware } from 'core/components/router';
import { compose, storageValue } from 'core/utils';
import { combineReducers, REDUCER } from 'core/models/reducer';

import {
  attachEpicMiddlewareToStore,
  initializeEpics,
} from 'core/models/epics';

import config from 'config';

import { initialEpics, initialReducer } from './storeConfig';

const { get: getInitialState, set: setStateInStorage } = storageValue(
  config.siteShortName,
  true,
);

let storeCache;

const createStore = (preloadedState) => {
  if (storeCache) {
    return storeCache;
  }

  const epicMiddleware = createEpicMiddleware();
  const middleware = [epicMiddleware, routerMiddleware];

  const composeEnhancers = process.env.DEPLOY_BUILD
    ? compose
    : composeWithDevTools({
        name: 'Agile Actors',
        trace: true,
        traceLimit: 25,
      });

  const store = reduxCreateStore(
    combineReducers(initialReducer),
    getInitialState() || preloadedState || {},
    composeEnhancers(applyMiddleware(...middleware)),
  );

  attachEpicMiddlewareToStore(store, epicMiddleware);
  initializeEpics(store, initialEpics);

  store[REDUCER] = initialReducer;
  store.history = createHistory(store);

  let previousState = preloadedState || {};

  store.subscribe(() => {
    const newState = store.getState();

    previousState !== newState && setStateInStorage(newState);
    previousState = newState;
  });

  storeCache = store;

  return store;
};

export default createStore;
