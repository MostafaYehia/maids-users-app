import { Component, OnInit, inject } from '@angular/core';
import { TableModule } from 'primeng/table';
import { IUser } from '../../interfaces';
import { UserCardComponent } from '../user-card/user-card.component';
import { UserService } from '../../services/user.service';
import { RouterLink } from '@angular/router';
import { AppStore } from '../../stores';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@Component({
  selector: 'app-users-table',
  standalone: true,
  imports: [TableModule, UserCardComponent, RouterLink, ProgressSpinnerModule],
  templateUrl: './users-table.component.html',
  styleUrl: './users-table.component.scss',
})
export class UsersTableComponent {
  userService = inject(UserService);
  appState = inject(AppStore);
  isLoading = false;
  users: IUser[] = [];
  totalUsers = 0;
  per_page = 6;
  currentPage = 1;

  loadUsersLazy(event: any) {
    this.currentPage = event.first / event.rows + 1;
    this.loadUsers(this.currentPage);
  }

  private loadUsers(page: number) {
    this.isLoading = true;
    const cachedUsers = this.appState.paginatedUsers$().get(page);
    if (!!cachedUsers) {
      this.users = cachedUsers;
      this.totalUsers = this.appState.totlaUsers$();
      this.isLoading = false;
      return;
    }
    
    this.userService.getUsers(page).subscribe((res) => {
      this.users = res.data;
      this.totalUsers = res.total;
      this.per_page = res.per_page;
      this.appState.cachePaginatedUsers(page, this.users, this.totalUsers);
      this.isLoading = false;
    });
  }
}
