export const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';
export const FETCH_USER_CANCEL = 'FETCH_USER_CANCEL';

export type FetchUserRequest = {
  type: typeof FETCH_USER_REQUEST;
  id: number;
};

export function fetchUserRequest(id: number): FetchUserRequest {
  return {
    type: FETCH_USER_REQUEST,
    id,
  };
}

type FetchUserSuccess = {
  type: typeof FETCH_USER_SUCCESS;
  name: string;
};

export function fetchUserSuccess(name: string): FetchUserSuccess {
  return {
    type: FETCH_USER_SUCCESS,
    name,
  };
}

type FetchUserFailure = {
  type: typeof FETCH_USER_FAILURE;
  message: string;
};

export function fetchUserFailure(message: string): FetchUserFailure {
  return {
    type: FETCH_USER_FAILURE,
    message,
  };
}

type FetchUserCancel = {
  type: typeof FETCH_USER_CANCEL;
};

export function fetchUserCancel(): FetchUserCancel {
  return {
    type: FETCH_USER_CANCEL,
  };
}

export type Actions =
  | FetchUserRequest
  | FetchUserSuccess
  | FetchUserFailure
  | FetchUserCancel;
