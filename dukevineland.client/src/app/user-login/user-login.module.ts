import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { UsersOverviewComponent } from './components/users-overview/users-overview.component';
import { LoginComponent } from './components/login/login.component';
import { AddUserComponent } from './components/add-user/add-user.component';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
//import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms'





@NgModule({
  declarations: [
    UsersOverviewComponent,
    LoginComponent,
    AddUserComponent
  ],
  imports: [

    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatTabsModule,

    NgbModule,
    NgbNavModule,

    FormsModule,
    ReactiveFormsModule, 


    CommonModule
  ],
  exports: [
    LoginComponent,
    UsersOverviewComponent]
})
export class UserLoginModule { }
