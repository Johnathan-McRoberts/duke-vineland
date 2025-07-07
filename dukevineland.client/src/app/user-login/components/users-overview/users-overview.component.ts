import { Component, inject } from '@angular/core';
import { Routes } from '@angular/router';
import { AddUserComponent } from '../add-user/add-user.component';
import { LoginComponent } from '../login/login.component';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

import { Router } from '@angular/router';

@Component({
  selector: 'app-users-overview',
  templateUrl: './users-overview.component.html',
  styleUrls: ['./users-overview.component.scss']
})
export class UsersOverviewComponent {
  private router = inject(Router);
}
