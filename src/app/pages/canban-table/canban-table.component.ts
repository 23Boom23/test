import { Component } from '@angular/core';
import { CanbanCardComponent } from "../../common-ui/canban-card/canban-card.component";
import { mockCards } from '../../data/constants/constants';
import {FormsModule} from '@angular/forms';
import {JsonPipe, NgForOf, NgIf} from '@angular/common';
import {TuiDataListComponent} from '@taiga-ui/core';
import {TuiAccordionDirective, TuiAccordionItem} from '@taiga-ui/kit';
interface Task {
  id: number;
  title: string;
  status: 'new' | 'in-progress' | 'resolved' | 'closed';
  assignee: string;
}

const MOCK_DATA: Task[] = [
  { id: 1, title: 'Develop new graph component', status: 'new', assignee: 'Vilgelimina Sh.' },
  { id: 2, title: 'Fix layout issues on dashboard', status: 'in-progress', assignee: 'Vilgelimina Sh.' },
  { id: 3, title: 'Implement export to CSV', status: 'resolved', assignee: 'Vilgelimina Sh.' },
  { id: 4, title: 'Review pull request #42', status: 'closed', assignee: 'Vilgelimina Sh.' },
];
@Component({
  selector: 'app-canban-table',
  imports: [
    CanbanCardComponent,
    FormsModule,
    TuiAccordionItem,
    TuiAccordionDirective,
    JsonPipe,
  ],
  templateUrl: './canban-table.component.html',
  styleUrl: './canban-table.component.scss'
})
export class CanbanTableComponent {
  tasks = MOCK_DATA;
  selectedTask?: Task | null = null;

  onTaskClick(task: Task) {
    this.selectedTask = task;
  }
  protected readonly mockCards = mockCards;
}
