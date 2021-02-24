import { Injectable } from '@angular/core';
import {
  OAuthService,
  NullValidationHandler,
  UserInfo,
} from 'angular-oauth2-oidc';
import { authConfig } from './auth-config';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _userProfile: UserInfo | null = null;

  public get isLoggedIn() {
    return this.oauthService.hasValidAccessToken();
  }

  public get userProfile() {
    return this._userProfile;
  }

  constructor(private readonly oauthService: OAuthService) {}

  public initAuth() {
    this.oauthService.configure(authConfig);
    this.oauthService.setStorage(localStorage);
    this.oauthService.tokenValidationHandler = new NullValidationHandler();

    this.oauthService
      .loadDiscoveryDocumentAndTryLogin()
      .then(async (isLoggedIn) => {
        if (isLoggedIn) {
          this._userProfile = await this.oauthService.loadUserProfile();
          this.oauthService.setupAutomaticSilentRefresh();
        }
      });
  }

  public beginLoginFlow() {
    this.oauthService.initLoginFlow();
  }

  public logout() {
    this.oauthService.revokeTokenAndLogout();
  }
}
