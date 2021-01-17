import { map } from 'rxjs/operators';

import { combineEpics, ofType } from 'core/models/epics';

import { updateArray, generateNewArray } from './actions';

import { randomArray } from './utils';

const generateNewArrayEpic = (action$) =>
  action$.pipe(
    ofType(generateNewArray.type),
    map(() => randomArray(100)),
    map(updateArray),
  );

const epics = combineEpics(generateNewArrayEpic);

export default epics;
