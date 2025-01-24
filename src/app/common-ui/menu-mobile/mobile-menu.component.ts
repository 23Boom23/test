import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface MenuItem {
  label: string;
  route: string;
  icon: string;
}

@Component({
  selector: 'app-mobile-menu',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MobileMenuComponent {
  public teamNotifications: number = 16;
  public messageNotifications: number = 8;

  protected readonly menuItems: MenuItem[] = [
    { label: 'Rocket', route: '/team', icon: 'ic_rocket.svg' },
    { label: 'Home', route: '/home', icon: 'team.svg' },
    { label: 'Messages', route: '/messages', icon: 'message.svg' },
  ];

  public showNotification(label: string): boolean {
    return label === 'Team' || label === 'Messages';
  }

  public getNotificationCount(label: string): number {
    if (label === 'Team') {
      return this.teamNotifications;
    } else if (label === 'Messages') {
      return this.messageNotifications;
    }
    return 0;
  }
}
