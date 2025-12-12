import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoverImageFormComponent } from './cover-image-form.component';

describe('CoverImageFormComponent', () => {
  let component: CoverImageFormComponent;
  let fixture: ComponentFixture<CoverImageFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoverImageFormComponent]
    });
    fixture = TestBed.createComponent(CoverImageFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
