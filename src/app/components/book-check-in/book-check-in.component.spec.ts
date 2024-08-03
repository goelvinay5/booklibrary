import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookCheckInComponent } from './book-check-in.component';

describe('BookCheckInComponent', () => {
  let component: BookCheckInComponent;
  let fixture: ComponentFixture<BookCheckInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookCheckInComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookCheckInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
