import { combineReducers } from 'redux';

// import { reducer as layout } from 'components/app/components/layout/ui-model';
import { reducer as snackbar } from 'components/app/components/layout/components/snackbar/ui-model';

const reducer = combineReducers({
  // layout,
  snackbar,
});

export default reducer;
