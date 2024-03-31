import { Injectable, inject } from '@angular/core';
import { HttpService } from './http.service';
import { API_ENDPOINTS } from '../constants';
import { IGetUserResponse, IGetUsersListResponse } from '../contracts/users.contract';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  httpService = inject(HttpService);


  getUsers(page: number): Observable<IGetUsersListResponse> {
    let url = API_ENDPOINTS.USERS.replace(':page', page.toString());
    return this.httpService.get<IGetUsersListResponse>(url);
  }


  getUser(id: number): Observable<IGetUserResponse> {
    let url = API_ENDPOINTS.USER_DETAILS.replace(':id', id.toString());
    return this.httpService.get<IGetUserResponse>(url);
  }

}
