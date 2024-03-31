import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { UsersTableComponent } from '../../components/users-table/users-table.component';


@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [InputTextModule, FormsModule, UsersTableComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  seachValue = '';
}
