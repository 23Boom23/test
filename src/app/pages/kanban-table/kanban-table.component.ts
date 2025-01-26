import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { Card } from '../../shared/interface/page.interface';
import { DatePipe, NgForOf } from '@angular/common';
import { allCards, categories, filteredOptions1, filteredOptions2, mockCards} from '../../shared/constants/constants';
import { MobileMenuComponent } from '../../common-ui/menu-mobile/mobile-menu.component';
import {KanbanCardComponent} from '../../common-ui/canban-card/kanban-card.component';

@Component({
  selector: 'app-kanban-table',
  imports: [FormsModule, NgForOf, MobileMenuComponent, KanbanCardComponent],
  templateUrl: './kanban-table.component.html',
  styleUrl: './kanban-table.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class KanbanTableComponent implements OnInit {
  currentDate: string | undefined;
  categories = categories;
  mockCards: Card[] = mockCards;
  selectedStatusFilter: string = 'inProgress';
  selectedProductFilter: string = 'allProducts';
  selectedTypeFilter: string = 'all';
  productFilterOptions  = filteredOptions1;
  typeFilterOptions  = filteredOptions2;
  filteredCards: Card[] = [];
  assignedCards: Card[] = [];
  unassignedCards: Card[] = [];
  allCards: Card[] = allCards;

  private readonly datePipe: DatePipe = inject(DatePipe);

  get inProgressCards(): Card[] {
    return this.allCards.filter(card => card.inProgressCard);
  }

  get pausedCards(): Card[] {
    return this.allCards.filter(card => card.onPause);
  }

  ngOnInit(): void {
    const locale = 'ru';
    this.currentDate = this.datePipe.transform(new Date(), 'EEEE, d MMMM', undefined, locale)!;
    this.applyFilters();
  }

  applyFilters(): void {
    this.filteredCards = this.mockCards.filter((card) =>
      (this.selectedProductFilter === 'allProducts' || card.product === this.selectedProductFilter) &&
      (this.selectedTypeFilter === 'all' || card.type === this.selectedTypeFilter) &&
      (this.selectedStatusFilter === 'all' || card.status === this.selectedStatusFilter)
    );

    this.assignedCards = this.filteredCards.filter((card) => card.assigned === true);
    this.unassignedCards = this.filteredCards.filter((card) => card.assigned === false);
  }

  setFilter(status: string) :void {
    this.selectedStatusFilter = status;
    this.applyFilters();
  }

  getTaskCount(status: string) :number {
    return this.mockCards.filter((card) => card.status === status).length;
  }

  capitalizeFirstLetterOfEachWord(str: string | undefined): string | undefined {
    if (!str) return str;
    return str
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  }

  getAssignedCardCount(): number {
    return this.filteredCards.filter((card) => card.assigned).length;
  }

  getUnassignedCardCount(): number {
    return this.filteredCards.filter((card) => !card.assigned).length;
  }
}
