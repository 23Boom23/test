import { Component, Input } from '@angular/core';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-canban-buttons',
  templateUrl: './canban-buttons.component.html',
  styleUrl: './canban-buttons.component.scss',
  standalone: true,
  imports: [
    NgIf
  ]
})
export class CanbanButtonsComponent {
  @Input() showFixButton: boolean = true;
  @Input() showWorkButton: boolean = true;
  @Input() showAcceptButton: boolean = true;
  @Input() showPauseButton: boolean = false;
  @Input() showDoneButton: boolean = false;
}
