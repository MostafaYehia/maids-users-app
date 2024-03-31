import { Component, inject } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Router } from '@angular/router';
import { UserCardComponent } from '../user-card/user-card.component';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-user-card-dialog',
  standalone: true,
  imports: [UserCardComponent, ButtonModule],
  templateUrl: './user-card-dialog.component.html',
  styleUrl: './user-card-dialog.component.scss',
})
export class UserCardDialogComponent {
  dialogData: DynamicDialogConfig<any> = inject(DynamicDialogConfig);
  ref = inject(DynamicDialogRef);
  router = inject(Router);

  showProfile() {
    this.router.navigate(['/users', this.dialogData.data.user?.id]);
    this.ref.close();
  }
}
