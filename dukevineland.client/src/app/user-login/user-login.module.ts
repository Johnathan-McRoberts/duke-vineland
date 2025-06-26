import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersOverviewComponent } from './components/users-overview/users-overview.component';



@NgModule({
  declarations: [
    UsersOverviewComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [UsersOverviewComponent]
})
export class UserLoginModule { }
