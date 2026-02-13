import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { GoogleauthService } from './services/googleauth.service';

export const appGuardGuard: CanActivateFn = (route, state) => {
  const authService = inject(GoogleauthService);

  const router = inject(Router);

  if (authService.profile()?.given_name) {
    return true;
  }
  router.navigate(['home']);
  return false;
};
