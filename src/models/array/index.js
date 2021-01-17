import epics from './epics';
import reducer from './reducer';

import { updateArray, generateNewArray } from './actions';

import { array } from './selectors';

export { updateArray, generateNewArray, array, reducer, epics };
