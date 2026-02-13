import { Injectable, signal } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { authCodeFlowConfig } from '../auth.config';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class GoogleauthService {

  constructor(
    private oAuthService: OAuthService,
    private router: Router,
  ) {
    this.initialize();
  }

  profile = signal<any>({});

  initialize() {
    this.oAuthService.configure(authCodeFlowConfig);
    this.oAuthService.setupAutomaticSilentRefresh();
    this.oAuthService.loadDiscoveryDocumentAndTryLogin().then(() => {
      if (this.oAuthService.hasValidAccessToken())
        this.profile.set(this.oAuthService.getIdentityClaims());
    });
  }

  login() {
    this.oAuthService.initImplicitFlow();
  }

  logout() {
    this.oAuthService.revokeTokenAndLogout();
    this.oAuthService.logOut();
    this.router.navigate(['home']);
    this.profile.set(null);
  }
}
