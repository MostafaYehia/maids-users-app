import { Component } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [AvatarModule, CardModule],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss',
})
export class UserCardComponent {}
