import { Component, inject, OnInit } from '@angular/core';
import { CanbanCardComponent } from '../../common-ui/canban-card/canban-card.component';
import { FormsModule } from '@angular/forms';
import { Card } from '../../data/interface/page.interface';
import { DatePipe, NgForOf } from '@angular/common';
import {allCards, categories, filteredOptions1, filteredOptions2, mockCards} from '../../data/constants/constants';
import {MobileMenuComponent} from '../../common-ui/menu-mobile/mobile-menu.component';

@Component({
  selector: 'app-canban-table',
  imports: [CanbanCardComponent, FormsModule, NgForOf, MobileMenuComponent],
  templateUrl: './canban-table.component.html',
  styleUrl: './canban-table.component.scss',
})
export class CanbanTableComponent implements OnInit {
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

  private readonly datePipe = inject(DatePipe);


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
