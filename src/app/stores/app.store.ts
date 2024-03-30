import {
  getState,
  patchState,
  signalStore,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals';
import { LocalStorageKeys } from '../constants';
import { inject } from '@angular/core';
import { BrowserStorageService } from '../common/services/browser-storage.service';

export type AppState = {
  users$: any[];
};

const initialState: AppState = {
  users$: [],
};

export const AppStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store, storageService = inject(BrowserStorageService)) => ({
    setUsers(users: any[]) {
      patchState(store, { users$: users });
      this.saveState();
    },
    saveState: () => {
      let state = getState(store);
      storageService.set(LocalStorageKeys.APP_STATE, JSON.stringify(state));
    },
    loadState: () => {
      let storedUiState = storageService.get(LocalStorageKeys.APP_STATE);
      if (!storedUiState) return;
      let parsedState = JSON.parse(storedUiState) as AppState;
      patchState(store, { ...parsedState });
    },
  })),
  withHooks({
    onInit(store) {
      store.loadState();
    },
  })
);
