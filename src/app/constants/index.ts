import { environment } from '../environments/enviroment.dev';

export const API_URL = environment.apiUrl;

export const APP_NAV = {
  HOME: '',
  USER_DETAILS: 'users/:id',
};

export const API_ENDPOINTS = {
  LOGIN: `${API_URL}/auth/login`,
  SIGNUP: `${API_URL}/auth/signup`,
};

export enum LocalStorageKeys {
  APP_STATE = 'appState.cache',
}
