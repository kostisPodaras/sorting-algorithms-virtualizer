import { handleActions } from 'redux-actions';

import { signInUser } from './actions';

const initialState = {};

const reducer = handleActions(
  {
    [signInUser.succeeded.type]: (state) => ({
      ...state,
      id: 'test_user_id',
      name: 'test_user_name',
    }),
  },
  initialState,
);

export default reducer;
