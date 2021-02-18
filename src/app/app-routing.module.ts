import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router' // eslint-disable-line no-unused-vars
import { DashboardComponent } from './pages/dashboard/dashboard.component'

const routes: Routes = [
  { path: '', component: DashboardComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
