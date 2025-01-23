import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {menuItems} from '../../data/constants/constants';
import {TuiAvatar, TuiBadgedContentComponent, TuiBadgedContentDirective, TuiBadgeNotification} from '@taiga-ui/kit';

@Component({
  selector: 'app-header-page',
  imports: [
    RouterOutlet,
    RouterLink,
    TuiAvatar,
    TuiBadgedContentComponent,
  ],
  templateUrl: './header-page.component.html',
  styleUrl: './header-page.component.scss'
})
export class HeaderPageComponent {
  protected readonly menuItems = menuItems;
}
