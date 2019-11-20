import { mergeMap, map, takeUntil, catchError } from 'rxjs/operators';
import { ofType, ActionsObservable } from 'redux-observable';
import { of } from 'rxjs';

import {
  Actions,
  FetchUserRequest,
  fetchUserSuccess,
  fetchUserFailure,
  FETCH_USER_CANCEL,
  FETCH_USER_REQUEST,
} from './hello-button-actions';

import getFakeUserInfo from '../../../api/getUserInfo';

export const watchForUserRequest = (action$: ActionsObservable<Actions>) =>
  action$.pipe(
    ofType<FetchUserRequest>(FETCH_USER_REQUEST),
    mergeMap(({ id }) =>
      getFakeUserInfo(id).pipe(
        map(({ user: { userName } }) => fetchUserSuccess(userName)),
        takeUntil(action$.pipe(ofType(FETCH_USER_CANCEL))),
        catchError(({ message = 'unknown error' }) =>
          of(fetchUserFailure(message)),
        ),
      ),
    ),
  );
