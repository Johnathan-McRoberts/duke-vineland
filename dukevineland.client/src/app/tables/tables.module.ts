import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablesOverviewComponent } from './components/tables-overview/tables-overview.component';



@NgModule({
  declarations: [
    TablesOverviewComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [TablesOverviewComponent]
})
export class TablesModule { }
