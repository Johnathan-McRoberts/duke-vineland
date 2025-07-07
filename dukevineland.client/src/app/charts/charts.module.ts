import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsOverviewComponent } from './components/charts-overview/charts-overview.component';



@NgModule({
  declarations: [
    ChartsOverviewComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ChartsOverviewComponent]
})
export class ChartsModule { }
