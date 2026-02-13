import { Component, inject } from '@angular/core';
import { NavbarItem } from "../navbar-item/navbar-item";
import { GoogleauthService } from '../../services/googleauth.service';

@Component({
  selector: 'app-navbar',
  imports: [NavbarItem],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {

    authService = inject(GoogleauthService);

    logout():void {
        this.authService.logout()
    }

    profile = this.authService.profile;

}
