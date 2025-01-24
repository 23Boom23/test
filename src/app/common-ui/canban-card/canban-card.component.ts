import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, Input } from '@angular/core';
import { Card } from '../../data/interface/page.interface';
import { ProgressBarComponent } from './canban-progress-bar/canban-progress-bar.component';
import { NgClass, NgIf } from '@angular/common';
import { CanbanButtonsComponent } from './canban-buttons/canban-buttons.component';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {CanbanTittleComponent} from './canban-tittle/canban-tittle.component';

@Component({
  selector: 'app-canban-card',
  imports: [
    ProgressBarComponent,
    NgClass,
    CanbanButtonsComponent,
    NgIf,
    CanbanTittleComponent,
  ],
  templateUrl: './canban-card.component.html',
  styleUrls: ['./canban-card.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CanbanCardComponent {
  @Input() card!: Card;
  showButtons = false;
  showTitle = false;
  private mouseEnterSubject = new Subject<void>();
  private mouseLeaveSubject = new Subject<void>();
  cdr = inject(ChangeDetectorRef);

  constructor() {
    this.mouseEnterSubject.pipe(debounceTime(300), takeUntilDestroyed()).subscribe(() => this.onMouseEnter());
    this.mouseLeaveSubject.pipe(debounceTime(800), takeUntilDestroyed()).subscribe(() => this.onMouseLeave());
  }

  onMouseEnterOnTitle() {
      this.showTitle = true;
      this.cdr.markForCheck();
  }

  onMouseEnter() {
      this.showButtons = true;
      this.cdr.markForCheck();
  }

  onMouseLeave() {
      this.showButtons = false;
      this.showTitle = false;
      this.cdr.markForCheck();
  }

  handleMouseEnter() {
    this.mouseEnterSubject.next();
  }

  handleMouseLeave() {
    this.mouseLeaveSubject.next();
  }
}
