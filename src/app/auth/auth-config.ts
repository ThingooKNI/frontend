import { AuthConfig } from 'angular-oauth2-oidc'

export const authConfig: AuthConfig = {
  issuer: 'https://dev.thingoo.xyz/auth/realms/Thingoo',
  clientId: 'thingoo-webapp',
  responseType: 'code',
  redirectUri: window.location.origin,
  postLogoutRedirectUri: window.location.origin,
  silentRefreshRedirectUri: window.location.origin + '/assets/silent-check-sso.html',
  scope: 'openid profile email',
  useSilentRefresh: true,
  showDebugInformation: true,
  disableAtHashCheck: true
}
