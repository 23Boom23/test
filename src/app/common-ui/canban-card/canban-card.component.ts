import { Component, Input } from '@angular/core';
import { Card } from '../../data/interface/page.interface';
import {ProgressBarComponent} from './canban-progress-bar/canban-progress-bar.component';

@Component({
  selector: 'app-canban-card',
  imports: [
    ProgressBarComponent
  ],
  templateUrl: './canban-card.component.html',
  styleUrl: './canban-card.component.scss',
  standalone: true,
})
export class CanbanCardComponent {
  @Input() card!: Card;
}
