import { environment } from '../environments/enviroment.dev';

export const API_URL = environment.apiUrl;

export const APP_NAV = {
  HOME: '',
  USER_DETAILS: 'users/:id',
};

export const API_ENDPOINTS = {
  USERS: `${API_URL}/users?page=:page`,
  USER_DETAILS: `${API_URL}/users/:id`,
};
