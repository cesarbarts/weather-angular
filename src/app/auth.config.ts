import { AuthConfig } from 'angular-oauth2-oidc';

export const authCodeFlowConfig: AuthConfig = {
  issuer: 'https://accounts.google.com',
  redirectUri: window.location.origin,
  clientId: 'SUA_CLIENT_ID',
  scope: 'openid profile email',
  strictDiscoveryDocumentValidation: false,
};
