import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { OAuthService, NullValidationHandler } from 'angular-oauth2-oidc';
import { authConfig } from './auth-config';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements CanActivate {
  public get isLoggedIn(): boolean {
    return (
      this.oauthService.hasValidAccessToken() &&
      this.oauthService.hasValidIdToken()
    );
  }

  public get userProfile(): any {
    return this.oauthService.getIdentityClaims();
  }

  public constructor(
    private readonly oauthService: OAuthService,
    protected readonly router: Router
  ) {}

  public canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.isLoggedIn) return true;
    this.beginLoginFlow(state.url.substring(1));
    return false;
  }

  public initAuth() {
    this.oauthService.configure(authConfig);
    this.oauthService.setStorage(localStorage);
    this.oauthService.tokenValidationHandler = new NullValidationHandler();

    this.oauthService
      .loadDiscoveryDocumentAndTryLogin()
      .then(async (tokensReceived) => {
        if (tokensReceived && this.isLoggedIn) {
          await this.oauthService.loadUserProfile();
          this.oauthService.setupAutomaticSilentRefresh();

          if (this.oauthService.state) {
            this.router.navigate([this.oauthService.state]);
          }
        }
      });
  }

  public beginLoginFlow(targetRouteName?: string) {
    this.oauthService.initLoginFlow(targetRouteName);
  }

  public logout() {
    this.oauthService.revokeTokenAndLogout();
  }
}
