import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { Subject } from 'rxjs';
import { ActionsObservable, StateObservable } from 'redux-observable';

// const getNodeByDataTestAttr = (wrapper, val) => {
//   return wrapper.find(`[data-test="${val}"]`);
// };

const testEpic = (epic, initialState = {}, deps = {}) => {
  const actionSubject = new Subject();
  const action$ = new ActionsObservable(actionSubject);
  const emitAction = ::actionSubject.next;

  const stateSubject = new Subject();
  const state$ = new StateObservable(stateSubject, initialState);
  const emitState = ::stateSubject.next;

  const epicEmissions = [];
  epic(action$, state$, deps).subscribe((event) => epicEmissions.push(event));

  return { emitAction, emitState, epicEmissions };
};

const shallowSnapshot = (Component) =>
  toJson(shallow(Component), {
    mode: 'shallow',
  });

export { shallow, testEpic, shallowSnapshot };
