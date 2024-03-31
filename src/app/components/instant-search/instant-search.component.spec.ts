import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstantSearchComponent } from './instant-search.component';

describe('InstantSearchComponent', () => {
  let component: InstantSearchComponent;
  let fixture: ComponentFixture<InstantSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstantSearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstantSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
