import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

import { openSnackbar, closeSnackbar } from './actions';

const open = handleActions(
  {
    [openSnackbar.type]: () => true,
    [closeSnackbar.type]: () => false,
  },
  false, // initial state
);

const message = handleActions(
  {
    [openSnackbar.type]: (state, { payload }) => payload.message,
    [closeSnackbar.type]: () => null,
  },
  null, // initial state
);

const reducer = combineReducers({
  open,
  message,
});

export { open, message };
export default reducer;
