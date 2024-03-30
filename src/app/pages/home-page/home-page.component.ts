import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { UserCardComponent } from '../../components/user-card/user-card.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [InputTextModule, FormsModule, UserCardComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  seachValue = '';
}
