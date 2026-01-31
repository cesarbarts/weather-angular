import { Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-navbar-item',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar-item.html',
  styleUrl: './navbar-item.scss',
})
export class NavbarItem {
    route = input.required<string>();
    label = input.required<string>();
}
