import { Component, Input } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { CardModule } from 'primeng/card';
import { IUser } from '../../interfaces';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [AvatarModule, CardModule],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss',
})
export class UserCardComponent {
  @Input({ required: true }) user: IUser | undefined;
}
