import { Component } from '@angular/core';
import { NavbarItem } from "../navbar-item/navbar-item";

@Component({
  selector: 'app-navbar',
  imports: [NavbarItem],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {

}
