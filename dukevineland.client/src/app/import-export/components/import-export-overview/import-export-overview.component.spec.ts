import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportExportOverviewComponent } from './import-export-overview.component';

describe('ImportExportOverviewComponent', () => {
  let component: ImportExportOverviewComponent;
  let fixture: ComponentFixture<ImportExportOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportExportOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImportExportOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
