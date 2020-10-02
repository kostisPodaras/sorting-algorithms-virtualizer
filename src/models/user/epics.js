import { mapTo } from 'rxjs/operators';

import { ofType, combineEpics } from 'core/models/epics';

import { signInUser, signOutUser } from './actions';

// TODO: remove..
const signInTestEpic = (action$) =>
  action$.pipe(ofType(signInUser.type), mapTo(signInUser.succeeded()));

const signOutTestEpic = (action$) =>
  action$.pipe(ofType(signOutUser.type), mapTo(signOutUser.succeeded()));

const epics = combineEpics(signInTestEpic, signOutTestEpic);

export default epics;
