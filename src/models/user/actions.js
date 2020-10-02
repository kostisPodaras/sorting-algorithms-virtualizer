import { ActionCreator } from 'core/models/actions';

const namespacedActionCreator = ActionCreator('//models/USER');

const signInUser = namespacedActionCreator('signIn');
const signOutUser = namespacedActionCreator('signOut');

export { signInUser, signOutUser };
