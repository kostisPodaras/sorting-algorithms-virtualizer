import { handleActions } from 'redux-actions';

import { signInUser, signOutUser } from './actions';

const initialState = {};

const reducer = handleActions(
  {
    [signInUser.succeeded.type]: (state) => ({
      ...state,
      id: 'test_user_id',
      name: 'test_user_name',
    }),
    [signOutUser.succeeded.type]: () => initialState,
  },
  initialState,
);

export default reducer;
