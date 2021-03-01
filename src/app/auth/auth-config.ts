import { AuthConfig } from 'angular-oauth2-oidc';
import { environment } from 'src/environments/environment';

export const authConfig: AuthConfig = {
  issuer: environment.apiUrl + '/auth/realms/Thingoo',
  clientId: 'thingoo-webapp',
  responseType: 'code',
  redirectUri: window.location.origin,
  postLogoutRedirectUri: window.location.origin,
  silentRefreshRedirectUri:
    window.location.origin + '/assets/silent-check-sso.html',
  scope: 'openid profile email',
  useSilentRefresh: true,
};
