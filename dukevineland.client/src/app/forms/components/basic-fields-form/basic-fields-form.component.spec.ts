import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicFieldsFormComponent } from './basic-fields-form.component';

describe('BasicFieldsFormComponent', () => {
  let component: BasicFieldsFormComponent;
  let fixture: ComponentFixture<BasicFieldsFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasicFieldsFormComponent]
    });
    fixture = TestBed.createComponent(BasicFieldsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
