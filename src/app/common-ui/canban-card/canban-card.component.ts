import {Component, Input} from '@angular/core';
import {Card} from '../../data/interface/page.interface';

@Component({
  selector: 'app-canban-card',
  imports: [],
  templateUrl: './canban-card.component.html',
  styleUrl: './canban-card.component.scss',
  standalone: true
})
export class CanbanCardComponent {
 @Input() card!: Card;
}
