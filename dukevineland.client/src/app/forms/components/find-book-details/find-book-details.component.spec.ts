import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindBookDetailsComponent } from './find-book-details.component';

describe('FindBookDetailsComponent', () => {
  let component: FindBookDetailsComponent;
  let fixture: ComponentFixture<FindBookDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FindBookDetailsComponent]
    });
    fixture = TestBed.createComponent(FindBookDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
