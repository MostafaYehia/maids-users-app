import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { UserService } from '../../services/user.service';
import { IUser } from '../../interfaces';
import { AvatarModule } from 'primeng/avatar';
import { AppStore } from '../../stores';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@Component({
  selector: 'app-user-details-page',
  standalone: true,
  imports: [AvatarModule, ProgressSpinnerModule, RouterLink],
  templateUrl: './user-details-page.component.html',
  styleUrl: './user-details-page.component.scss',
})
export class UserDetailsPageComponent implements OnInit {
  user: IUser | undefined;
  userService = inject(UserService);
  activatedRoute = inject(ActivatedRoute);
  appState = inject(AppStore);
  isLoading = false;

  ngOnInit(): void {
    let userId = this.activatedRoute.snapshot.paramMap.get('id') ?? 0;
    this.loadUserData(+userId);
  }

  private loadUserData(id: number) {
    this.isLoading = true;
    const cachedUser = this.appState.users$().get(id);
    if (!!cachedUser) {
      this.user = cachedUser;
      this.isLoading = false;
      return;
    }

    this.userService.getUser(id).subscribe((res) => {
      this.user = res.data;
      this.appState.cacheUser(this.user!);
      this.isLoading = false;
    });
  }
}
