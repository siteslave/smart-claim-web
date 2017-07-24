import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChangepassPageComponent } from './changepass-page/changepass-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { ImportPageComponent } from './import-page/import-page.component';
import { IpdPageComponent } from './ipd-page/ipd-page.component';
import { OpdPageComponent } from './opd-page/opd-page.component';
import { SendStatusPageComponent } from "./send-status-page/send-status-page.component";
import { AuthGuard } from '../auth-guard.service';

const routes: Routes = [
  {
    path: 'users', component: UsersComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'send-status', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent, pathMatch: 'full' },
      { path: 'opd', component: OpdPageComponent, pathMatch: 'full' },
      { path: 'ipd', component: IpdPageComponent, pathMatch: 'full' },
      { path: 'import', component: ImportPageComponent, pathMatch: 'full' },
      { path: 'profile', component: ProfilePageComponent, pathMatch: 'full' },
      { path: 'changepass', component: ChangepassPageComponent, pathMatch: 'full' },
      { path: 'send-status', component: SendStatusPageComponent, pathMatch: 'full' },
      { path: '**', component: PageNotFoundComponent, pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class UsersRoutingModule { }
