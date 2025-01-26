import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import {SvgIcon} from '../../svg/svg-icon.component';

@Component({
  selector: 'app-kanban-buttons',
  templateUrl: './kanban-buttons.component.html',
  styleUrl: './kanban-buttons.component.scss',
  standalone: true,
  imports: [
    NgIf,
    SvgIcon
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class KanbanButtonsComponent {
  @Input() showFixButton: boolean = true;
  @Input() showWorkButton: boolean = true;
  @Input() showAcceptButton: boolean = true;
  @Input() showPauseButton: boolean = false;
  @Input() showDoneButton: boolean = false;
}
