import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, Input } from '@angular/core';
import { Card } from '../../shared/interface/page.interface';
import { ProgressBarComponent } from './kanban-progress-bar/kanban-progress-bar.component';
import { NgClass, NgIf } from '@angular/common';
import { KanbanButtonsComponent } from './kanban-buttons/kanban-buttons.component';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { KanbanTittleComponent } from './kanban-tittle/kanban-tittle.component';
import {SvgIcon} from '../svg/svg-icon.component';

@Component({
  selector: 'app-kanban-card',
  imports: [
    ProgressBarComponent,
    NgClass,
    NgIf,
    KanbanButtonsComponent,
    KanbanTittleComponent,
    SvgIcon,
  ],
  templateUrl: './kanban-card.component.html',
  styleUrls: ['./kanban-card.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KanbanCardComponent {
  @Input() card!: Card;
  showButtons: boolean = false;
  showTitle: boolean = false;
  private mouseEnterSubject: Subject<void> = new Subject<void>();
  private mouseLeaveSubject: Subject<void> = new Subject<void>();
  cdr: ChangeDetectorRef = inject(ChangeDetectorRef);

  constructor() {
    this.mouseEnterSubject.pipe(debounceTime(300), takeUntilDestroyed()).subscribe(() => this.onMouseEnter());
    this.mouseLeaveSubject.pipe(debounceTime(800), takeUntilDestroyed()).subscribe(() => this.onMouseLeave());
  }

  onMouseEnterOnTitle(): void {
      this.showTitle = true;
      this.cdr.markForCheck();
  }

  onMouseEnter(): void {
      this.showButtons = true;
      this.cdr.markForCheck();
  }

  onMouseLeave(): void {
      this.showButtons = false;
      this.showTitle = false;
      this.cdr.markForCheck();
  }

  handleMouseEnter(): void {
    this.mouseEnterSubject.next();
  }

  handleMouseLeave(): void {
    this.mouseLeaveSubject.next();
  }
}
