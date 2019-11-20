import { delay } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { ajax } from 'rxjs/ajax';

type UserInfo = {
  user: {
    id: number;
    role: string;
    userName: string;
    firstName: string;
    lastName: string;
  };
  token: string;
  expiresAt: string;
};

export function getUserInfo(id: number): Observable<UserInfo> {
  return ajax.getJSON(`/user/${id}/`);
}

// Temporary mock below.

const getExampleUser = (id: number): UserInfo => ({
  user: {
    id,
    userName: 'Leeeeroy',
    firstName: 'Leeroy',
    lastName: 'Jenkins',
    role: 'Dragonslayer',
  },
  token: '35-a3bf70333f8f1316cb7841cd774c9ce8',
  expiresAt: '2019-12-12T16:55:02+0000',
});

export default function getFakeUserInfo(id: number): Observable<UserInfo> {
  return of(getExampleUser(id)).pipe(delay(1000));
}
