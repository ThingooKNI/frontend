import { NgModule, APP_INITIALIZER } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import { OAuthModule } from 'angular-oauth2-oidc'
import { AuthService } from './auth.service'

export function init_app (authService: AuthService) {
  return () => authService.initAuth()
}

@NgModule({
  imports: [HttpClientModule, OAuthModule.forRoot()],
  providers: [
    AuthService,
    {
      provide: APP_INITIALIZER,
      useFactory: init_app,
      deps: [AuthService],
      multi: true
    }
  ]
})
export class AuthConfigModule { }
