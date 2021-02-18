import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router' // eslint-disable-line no-unused-vars
import { DashboardComponent } from './pages/dashboard/dashboard.component'
import { UserProfileComponent } from './pages/user-profile/user-profile.component'
import { AuthGuardService } from './auth/auth-guard.service'

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'profile', component: UserProfileComponent, canActivate: [AuthGuardService] }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
