import { Routes } from '@angular/router';
import { HeaderPageComponent } from './pages/header-page/header-page.component';
import { KanbanTableComponent } from './pages/kanban-table/kanban-table.component';

export const routes: Routes = [
  {
    path: 'main-page',
    component: HeaderPageComponent,
    children: [{ path: '', component: KanbanTableComponent }],
  },
  { path: '',  redirectTo: 'main-page', pathMatch: 'full' },
  { path: '**', component: HeaderPageComponent },
];
