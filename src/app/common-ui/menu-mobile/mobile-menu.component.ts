import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {SvgIcon} from '../svg/svg-icon.component';

interface MenuItem {
  label: string;
  link: string;
  icon: string;
}

@Component({
  selector: 'app-mobile-menu',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, SvgIcon],
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MobileMenuComponent {
  public readonly teamNotificationsNumber: number = 16;
  public readonly messageNotificationsNumber: number = 8;

  protected readonly menuItems: MenuItem[] = [
    { label: 'Rocket', link: '', icon: 'rocket' },
    { label: 'Home', link: '', icon: 'team' },
    { label: 'Messages', link: '', icon: 'message' },
  ];

  public showNotification (label: string): boolean {
    return label === 'Team' || label === 'Messages';
  }

  public getNotificationCount (label: string): number {
    if (label === 'Team') {
      return this.teamNotificationsNumber;
    } else if (label === 'Messages') {
      return this.messageNotificationsNumber;
    }
    return 0;
  }
}
