import { NgModule, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { TodoComponent } from './page/todo.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HeaderComponent, TodoComponent],
  imports: [CommonModule, ReactiveFormsModule],
  bootstrap: [HeaderComponent, TodoComponent],
})
export class TodoModule {}
