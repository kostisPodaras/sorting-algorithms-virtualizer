import { mapTo } from 'rxjs/operators';

import { ofType, combineEpics } from 'core/models/epics';
import { push } from 'core/components/router';

import { signInUser } from 'models/user';

const navigateToHomeEpic = (action$) =>
  action$.pipe(ofType(signInUser.succeeded.type), mapTo(push('/app/')));

const epics = combineEpics(navigateToHomeEpic);

export default epics;
