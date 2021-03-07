import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { DeviceListComponent } from './pages/device-list/device-list.component';
import { DeviceDetailsComponent } from './pages/device-details/device-details.component';
import { AuthService } from './auth/auth.service';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  {
    path: 'profile',
    component: UserProfileComponent,
    canActivate: [AuthService],
  },
  {
    path: 'devices',
    component: DeviceListComponent,
    canActivate: [AuthService],
  },
  {
    path: 'devices/:id',
    component: DeviceDetailsComponent,
    canActivate: [AuthService],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      relativeLinkResolution: 'legacy',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
