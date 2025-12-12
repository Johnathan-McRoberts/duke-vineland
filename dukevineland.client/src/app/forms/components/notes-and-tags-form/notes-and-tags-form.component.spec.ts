import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesAndTagsFormComponent } from './notes-and-tags-form.component';

describe('NotesAndTagsFormComponent', () => {
  let component: NotesAndTagsFormComponent;
  let fixture: ComponentFixture<NotesAndTagsFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotesAndTagsFormComponent]
    });
    fixture = TestBed.createComponent(NotesAndTagsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
