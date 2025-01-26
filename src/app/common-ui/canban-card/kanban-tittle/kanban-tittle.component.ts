import { Component, Input } from '@angular/core';
import {NgIf} from '@angular/common';
import {SvgIcon} from '../../svg/svg-icon.component';

@Component({
  selector: 'app-kanban-tittle',
  templateUrl: './kanban-tittle.component.html',
  styleUrl: './kanban-tittle.component.scss',
  standalone: true,
  imports: [
    SvgIcon
  ]
})
export class KanbanTittleComponent {
  @Input() showAdditionalTittle: boolean = true;
  @Input() title!: string;
}
