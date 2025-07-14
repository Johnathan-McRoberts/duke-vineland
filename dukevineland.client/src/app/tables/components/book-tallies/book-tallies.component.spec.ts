import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookTalliesComponent } from './book-tallies.component';

describe('BookTalliesComponent', () => {
  let component: BookTalliesComponent;
  let fixture: ComponentFixture<BookTalliesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookTalliesComponent]
    });
    fixture = TestBed.createComponent(BookTalliesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
