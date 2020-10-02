import { mergeMap, groupBy } from 'rxjs/operators';

import sequence from './sequence';

const sequenceBy = (selector) => (...operations) =>
  pipe(groupBy(selector), mergeMap(sequence(...operations)));

export default sequenceBy;
