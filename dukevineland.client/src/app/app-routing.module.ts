import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


import { ChartsModule } from './charts/charts.module';
import { FormsModule } from './forms/forms.module';
import { ImportExportModule } from './import-export/import-export.module';
import { TablesModule } from './tables/tables.module';
import { UserLoginModule } from './user-login/user-login.module';
import { SharedModule } from './shared/shared.module';

import { UsersOverviewComponent } from './user-login/components/users-overview/users-overview.component';
import { LoginComponent } from './user-login/components/login/login.component';
import { ChartsOverviewComponent } from './charts/components/charts-overview/charts-overview.component';
import { FormsOverviewComponent } from './forms/components/forms-overview/forms-overview.component';
import { TablesOverviewComponent } from './tables/components/tables-overview/tables-overview.component';
import { ImportExportOverviewComponent } from './import-export/components/import-export-overview/import-export-overview.component';

const routes: Routes = [
  {
    path: '',
    title: 'Login',
    pathMatch: 'full',
    component: LoginComponent,
  },
  {
    path: 'login',
    title: 'Login',
    pathMatch: 'full',
    component: LoginComponent,
  },
  {
    path: 'tables',
    title: 'Tables',
    pathMatch: 'full',
    component: TablesOverviewComponent,
  },
  {
    path: 'forms',
    title: 'Forms',
    pathMatch: 'full',
    component: FormsOverviewComponent,
  },
  {
    path: 'charts',
    title: 'Charts',
    pathMatch: 'full',
    component: ChartsOverviewComponent,
  },
  {
    path: 'import-export',
    title: 'Import/Export',
    pathMatch: 'full',
    component: ImportExportOverviewComponent,
  },
  {
    path: 'users',
    title: 'Users',
    pathMatch: 'full',
    component: UsersOverviewComponent,
  },
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes),

    CommonModule,

    ChartsModule,
    FormsModule,
    ImportExportModule,
    TablesModule,
    UserLoginModule,
    SharedModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
