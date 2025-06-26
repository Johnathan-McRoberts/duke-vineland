import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


import { ChartsModule } from './charts/charts.module';
import { FormsModule } from './forms/forms.module';
import { ImportExportModule } from './import-export/import-export.module';
import { TablesModule } from './tables/tables.module';
import { UserLoginModule } from './user-login/user-login.module';

import { UsersOverviewComponent } from './user-login/components/users-overview/users-overview.component';
import { ChartsOverviewComponent } from './charts/components/charts-overview/charts-overview.component';
import { FormsOverviewComponent } from './forms/components/forms-overview/forms-overview.component';
import { TablesOverviewComponent } from './tables/components/tables-overview/tables-overview.component';
import { ImportExportOverviewComponent } from './import-export/components/import-export-overview/import-export-overview.component';


const routes: Routes = [
  {
    path: '',
    title: 'User Login',
    pathMatch: 'full',
    component: UsersOverviewComponent,
  },
  {
    path: 'users',
    title: 'User Login',
    pathMatch: 'full',
    component: UsersOverviewComponent,
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
  }
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
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
