import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditExistingBookComponent } from './edit-existing-book.component';

describe('EditExistingBookComponent', () => {
  let component: EditExistingBookComponent;
  let fixture: ComponentFixture<EditExistingBookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditExistingBookComponent]
    });
    fixture = TestBed.createComponent(EditExistingBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
