import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainToolbarComponent } from './main-toolbar/main-toolbar.component';

import { LoggedInService } from './services/logged-in.service';
import { UsersService } from './services/users.service';

import { HttpClientModule } from '@angular/common/http';


import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    MainToolbarComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,

    MatSlideToggleModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatToolbarModule,

    NgbModule,
    NgbNavModule
  ],
  exports:
    [
      MainToolbarComponent
    ]
})
export class SharedModule { }
