import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router' // eslint-disable-line no-unused-vars

const routes: Routes = []

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
