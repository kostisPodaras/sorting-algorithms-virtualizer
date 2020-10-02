import { ActionCreator } from 'core/models/actions';

const namespacedActionCreactor = ActionCreator('@@UI/SNACKBAR');

const openSnackbar = namespacedActionCreactor('open');
const closeSnackbar = namespacedActionCreactor('close');

export { openSnackbar, closeSnackbar };
