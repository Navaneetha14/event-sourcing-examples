/**
 * Created by andrew on 25/02/16.
 */
import { combineReducers } from 'redux';

import { configReducer } from './configure';
import { authReducer } from './authenticate';
import { signInReducer } from './signin';
import { signOutReducer } from './signout';
import { userReducer } from './user';

const authStateReducer = combineReducers({
  configure: configReducer,
  signIn: signInReducer,
  signOut: signOutReducer,
  authentication: authReducer,
  user: userReducer
});

export default authStateReducer;