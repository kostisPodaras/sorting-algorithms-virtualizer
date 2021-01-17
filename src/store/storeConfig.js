import { routerReducer } from 'core/components/router';

import { combineEpics, epics as coreEpics } from 'core/models/epics';

import { reducer as arrayReducer, epics as arrayEpics } from 'models/array';

const initialReducer = {
  router: routerReducer,
  array: arrayReducer,
};

const initialEpics = combineEpics(coreEpics, arrayEpics);

export { initialEpics, initialReducer };
