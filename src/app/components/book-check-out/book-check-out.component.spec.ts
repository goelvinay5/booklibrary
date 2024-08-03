import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookCheckOutComponent } from './book-check-out.component';

describe('BookCheckOutComponent', () => {
  let component: BookCheckOutComponent;
  let fixture: ComponentFixture<BookCheckOutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookCheckOutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookCheckOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
