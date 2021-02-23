import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, CanActivate } from '@angular/router'
import { OAuthService } from 'angular-oauth2-oidc'
import { AuthService } from './auth.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor (
    protected readonly router: Router,
    protected readonly authService: AuthService
  ) { }

  canActivate (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authService.isLoggedIn) {
      return true
    }

    // TODO: redirect to window.location.origin + state.url after logging in
    this.authService.beginLoginFlow()
    return false
  }
}
