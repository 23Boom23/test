import { Routes } from '@angular/router';
import { HeaderPageComponent } from './pages/header-page/header-page.component';
import { CanbanTableComponent } from './pages/canban-table/canban-table.component';

export const routes: Routes = [
  {
    path: '',
    component: HeaderPageComponent,
    children: [{ path: '', component: CanbanTableComponent }],
  },
];
