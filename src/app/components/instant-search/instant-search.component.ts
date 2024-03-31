import { NgClass } from '@angular/common';
import { Component, EventEmitter, OnDestroy, Output, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import {
  BehaviorSubject,
  Subject,
  Subscription,
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
} from 'rxjs';

@Component({
  selector: 'app-instant-search',
  standalone: true,
  imports: [InputTextModule, FormsModule, NgClass],
  templateUrl: './instant-search.component.html',
  styleUrl: './instant-search.component.scss',
})
export class InstantSearchComponent implements OnDestroy {
  userInput = '';
  seachValue$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  instantSubscription: Subscription | undefined;
  toast = inject(MessageService);
  isLoading = false;
  
  @Output() onValidSearch = new EventEmitter<string>();

  constructor() {
    this.watchUserInput();
  }

  onSearchChange(userInput: string) {
    this.isLoading = true;
    this.seachValue$.next(userInput);
  }

  private watchUserInput() {
    this.instantSubscription = this.seachValue$
      .pipe(
        distinctUntilChanged(),
        debounceTime(500),
        filter((value) => {
          let isValidId = !isNaN(+value) && +value > 0;

          if (!isValidId) {
            this.isLoading = false;
          }

          return isValidId;
        }),
        map((value) => {
          this.onValidSearch.emit(value);
          this.isLoading = false;
        })
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.instantSubscription?.unsubscribe();
  }
}
