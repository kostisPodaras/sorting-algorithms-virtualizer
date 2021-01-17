import { handleActions } from 'redux-actions';

import { updateArray } from './actions';

const reducer = handleActions(
  {
    [updateArray.type]: (state, { payload }) => payload,
  },
  [], // initial state
);

export default reducer;
