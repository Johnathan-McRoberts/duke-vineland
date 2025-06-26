import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsOverviewComponent } from './components/forms-overview/forms-overview.component';



@NgModule({
  declarations: [
    FormsOverviewComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [FormsOverviewComponent]
})
export class FormsModule { }
