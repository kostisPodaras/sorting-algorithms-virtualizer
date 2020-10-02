import { routerReducer } from 'core/components/router';

import { combineEpics, epics as coreEpics } from 'core/models/epics';

import { epics as userEpics, reducer as userReducer } from 'models/user';

const initialReducer = {
  router: routerReducer,
  user: userReducer,
};

const initialEpics = combineEpics(coreEpics, userEpics);

export { initialEpics, initialReducer };
