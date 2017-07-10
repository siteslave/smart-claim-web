import { ExcelService } from './../excel.service';
declare var require: any;

import { ChartModule } from 'angular2-highcharts';
import { DashboardService } from './dashboard.service';
import { UploadingService } from './../uploading.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MyDatePickerTHModule } from 'mydatepicker-th';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { ClarityModule } from 'clarity-angular';
import { AuthModule } from '../auth/auth.module';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { ChangepassPageComponent } from './changepass-page/changepass-page.component';
import { ImportPageComponent } from './import-page/import-page.component';

import { AuthGuard } from '../auth-guard.service';
import { UserService } from './user.service';
import { ClaimService } from './claim.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IpdPageComponent } from './ipd-page/ipd-page.component';
import { OpdPageComponent } from './opd-page/opd-page.component';
import { SendStatusPageComponent } from './send-status-page/send-status-page.component';
import { HighchartsStatic } from "angular2-highcharts/dist/HighchartsService";

export function highchartsFactory() {
  return require('highcharts');
}

const Highcharts = require('highcharts');

Highcharts.setOptions({
  credits: false
});

@NgModule({
  imports: [
    ChartModule,
    CommonModule,
    UsersRoutingModule,
    ClarityModule,
    AuthModule,
    FormsModule,
    MyDatePickerTHModule
  ],
  declarations: [
    UsersComponent,
    ProfilePageComponent,
    ChangepassPageComponent,
    ImportPageComponent,
    DashboardComponent,
    IpdPageComponent,
    OpdPageComponent,
    SendStatusPageComponent
  ],
  providers: [
    UserService,
    AuthGuard,
    ClaimService,
    UploadingService,
    DashboardService,
    ExcelService,
    { provide: HighchartsStatic, useFactory: highchartsFactory }
  ]
})
export class UsersModule { }
