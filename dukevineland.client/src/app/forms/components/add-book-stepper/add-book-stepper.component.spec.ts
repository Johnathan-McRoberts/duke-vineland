import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBookStepperComponent } from './add-book-stepper.component';

describe('AddBookStepperComponent', () => {
  let component: AddBookStepperComponent;
  let fixture: ComponentFixture<AddBookStepperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddBookStepperComponent]
    });
    fixture = TestBed.createComponent(AddBookStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
