import { combineEpics } from 'redux-observable';

import { watchForUserRequest } from '../application/hello-page/hello-button/hello-button-epics';

export default combineEpics(watchForUserRequest);
