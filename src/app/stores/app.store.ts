import {
  getState,
  patchState,
  signalStore,
  withMethods,
  withState,
} from '@ngrx/signals';
import { IUser } from '../interfaces';

export type AppState = {
  users$: Map<number, IUser>;
  paginatedUsers$: Map<number, IUser[]>;
  totlaUsers$: number;
};

const initialState: AppState = {
  users$: new Map<number, IUser>(),
  paginatedUsers$: new Map<number, IUser[]>(),
  totlaUsers$: 0,
};

export const AppStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store) => ({
    cachePaginatedUsers(page: number, users: IUser[], totalUsers: number) {
      let pgUsersState = getState(store).paginatedUsers$;
      pgUsersState.set(page, users);
      patchState(store, { paginatedUsers$: pgUsersState, totlaUsers$: totalUsers });
    },
    cacheUser(user: IUser) {
      let users = getState(store).users$;
      users.set(user.id, user);
      patchState(store, { users$: users });
    },
  }))
);
