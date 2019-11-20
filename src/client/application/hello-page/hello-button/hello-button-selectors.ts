import { Store } from '../../../redux/store';

export const getUserName = (state: Store) => state.userName;

export const getIsLoadingUser = (state: Store) => state.isLoadingUser;
