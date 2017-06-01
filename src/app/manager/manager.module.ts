import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ManagerRoutingModule } from './manager-routing.module';
import { ManagerComponent } from './manager.component';

import { ClarityModule } from 'clarity-angular';
import { MainPageComponent } from './main-page/main-page.component';
import { EmployeePageComponent } from './employee-page/employee-page.component';
import { ProcessPageComponent } from './process-page/process-page.component';
import { AttendancesPageComponent } from './attendances-page/attendances-page.component';
import { InitialPageComponent } from './initial-page/initial-page.component';
import { DepartmentPageComponent } from './department-page/department-page.component';
import { PositionPageComponent } from './position-page/position-page.component';
import { ManagerService } from './manager.service';
import { AuthModule } from '../auth/auth.module';
import { AuthGuard } from '../auth-guard.service';
@NgModule({
  imports: [
    CommonModule,
    ManagerRoutingModule,
    ClarityModule,
    FormsModule,
    AuthModule
  ],
  declarations: [
    ManagerComponent,
    MainPageComponent,
    EmployeePageComponent,
    ProcessPageComponent,
    AttendancesPageComponent,
    InitialPageComponent,
    DepartmentPageComponent,
    PositionPageComponent
  ],
  providers: [ManagerService, AuthGuard]
})
export class ManagerModule { }
