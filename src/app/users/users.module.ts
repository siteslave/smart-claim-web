import { NvD3Component } from 'ng2-nvd3';
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

@NgModule({
  imports: [
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
    SendStatusPageComponent,
    NvD3Component
  ],
  providers: [
    UserService,
    AuthGuard,
    ClaimService,
    UploadingService
  ]
})
export class UsersModule { }
