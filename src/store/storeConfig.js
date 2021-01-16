import { routerReducer } from 'core/components/router';

import { combineEpics, epics as coreEpics } from 'core/models/epics';

const initialReducer = {
  router: routerReducer,
};

const initialEpics = combineEpics(coreEpics);

export { initialEpics, initialReducer };
