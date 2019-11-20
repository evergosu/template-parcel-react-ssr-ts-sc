import {
  Actions,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
} from './hello-button-actions';

export function userName(state = 'user', action: Actions): string {
  switch (action.type) {
    case FETCH_USER_SUCCESS:
      return action.name;
    case FETCH_USER_FAILURE:
      return 'user';
    default:
      return state;
  }
}

export function isLoadingUser(state = false, action: Actions): boolean {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return true;
    case FETCH_USER_SUCCESS:
    case FETCH_USER_FAILURE:
      return false;
    default:
      return state;
  }
}

type UserError = {
  hasError: boolean;
  message: string;
};

export function userError(
  state: UserError = { hasError: false, message: '' },
  action: Actions,
): UserError {
  switch (action.type) {
    case FETCH_USER_FAILURE:
      return {
        hasError: true,
        message: action.message,
      };
    default:
      return state;
  }
}
