import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablesOverviewComponent } from './tables-overview.component';

describe('TablesOverviewComponent', () => {
  let component: TablesOverviewComponent;
  let fixture: ComponentFixture<TablesOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablesOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablesOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
