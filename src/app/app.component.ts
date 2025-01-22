import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CanbanCardComponent} from './common-ui/canban-card/canban-card.component';
import {mockCards} from './data/interface/canban-card.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CanbanCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'soft-artel-test';
  protected readonly mockCards = mockCards;
}
