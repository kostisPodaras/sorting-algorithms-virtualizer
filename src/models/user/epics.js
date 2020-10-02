import { mapTo } from 'rxjs/operators';

import { ofType, combineEpics } from 'core/models/epics';

import { signInUser } from './actions';

// TODO: remove..
const testEpic = (action$) =>
  action$.pipe(ofType(signInUser.type), mapTo(signInUser.succeeded()));

const epics = combineEpics(testEpic);

export default epics;
