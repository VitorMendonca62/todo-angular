import { Routes } from '@angular/router';
import { TodoComponent } from './modules/todo/page/todo.component';

export const routes: Routes = [
  {
    path: '',
    component: TodoComponent,
    pathMatch: 'full',
  },
];
