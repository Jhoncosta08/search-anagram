import { Component } from '@angular/core';
import {HamburgerComponent} from './hamburger/hamburger.component';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [HamburgerComponent, RouterLinkActive, RouterLink],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss', '../../shared/scss/hover-effects.scss']
})
export class NavComponent {}
