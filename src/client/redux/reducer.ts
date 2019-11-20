import { combineReducers } from 'redux';

import {
  userName,
  userError,
  isLoadingUser,
} from '../application/hello-page/hello-button/hello-button-reducers';

export default combineReducers({
  userName,
  userError,
  isLoadingUser,
});
