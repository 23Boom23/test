import { Component, Input } from '@angular/core';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-canban-tittle',
  templateUrl: './canban-tittle.component.html',
  styleUrl: './canban-tittle.component.scss',
  standalone: true,
})
export class CanbanTittleComponent {
  @Input() showAdditionalTittle: boolean = true;
  @Input() title: string | undefined;
}
