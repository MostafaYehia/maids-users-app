import { Component, inject } from '@angular/core';
import { UsersTableComponent } from '../../components/users-table/users-table.component';
import { TypingAnimationDirective } from '../../animations/directives/typing-animation.directive';
import { InstantSearchComponent } from '../../components/instant-search/instant-search.component';
import { UserService } from '../../services/user.service';
import { DialogService } from 'primeng/dynamicdialog';
import { UserCardDialogComponent } from '../../components/user-card-dialog/user-card-dialog.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    UsersTableComponent,
    TypingAnimationDirective,
    InstantSearchComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {

  userService = inject(UserService);
  dialogService = inject(DialogService);

  onSearchChange(userInput: string) {
    this.userService.getUser(+userInput).subscribe(res => {
      this.dialogService.open(UserCardDialogComponent, {
        draggable : true,
        data: {
          user: res.data
        }
      })
    });
  }
}
