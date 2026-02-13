import { Component, inject } from '@angular/core';
import { GoogleauthService } from '../../services/googleauth.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  private googleAuth = inject(GoogleauthService);
  public profile = this.googleAuth.profile;

  makeLogin() {
    this.googleAuth.login();
  }
}
