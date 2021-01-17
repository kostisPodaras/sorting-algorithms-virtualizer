import { ActionCreator } from 'core/models/actions';

const namespacedActionCreator = ActionCreator('//models/ARRAY');

const updateArray = namespacedActionCreator('updateArray');
const generateNewArray = namespacedActionCreator('generateNewArray');

export { updateArray, generateNewArray };
