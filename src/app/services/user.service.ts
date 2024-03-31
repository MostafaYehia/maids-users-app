import { Injectable, inject } from '@angular/core';
import { HttpService } from './http.service';
import { API_ENDPOINTS } from '../constants';
import { IGetUserResponse, IGetUsersListResponse } from '../contracts/users.contract';
import { Observable, tap } from 'rxjs';
import { AppStore } from '../stores';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  httpService = inject(HttpService);
  appState = inject(AppStore);


  getUsers(page: number): Observable<IGetUsersListResponse> {
    let url = API_ENDPOINTS.USERS.replace(':page', page.toString());
    return this.httpService.get<IGetUsersListResponse>(url).pipe(tap(res => {
      if(res.data) {
        this.appState.cachePaginatedUsers(page, res.data, res.total);
      }
    }));
  }


  getUser(id: number): Observable<IGetUserResponse> {
    let url = API_ENDPOINTS.USER_DETAILS.replace(':id', id.toString());
    return this.httpService.get<IGetUserResponse>(url).pipe(tap(res => {
      if(res.data) {
        this.appState.cacheUser(res.data);
      }
    }));
  }

}
