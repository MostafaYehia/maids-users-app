import { IUser } from '../interfaces';

export interface IGetUsersListResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: IUser[];
}

export interface IGetUserResponse {
  data?: IUser;
  support?: {
    url: string;
    text: string;
  };
}
