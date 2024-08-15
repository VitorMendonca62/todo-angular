import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TodosService } from '../../../services/todos.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoComponent implements OnInit {
  constructor(public todosService: TodosService) {}

  formsVisible: boolean = false;
  todos!: ITodo[];
  allTodos!: ITodo[];
  page: 'andamento' | 'concluido' = 'andamento';

  formGroup = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(3)]),
    description: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    done: new FormControl(false, [Validators.required]),
  });

  ngOnInit(): void {
    this.getToDos();
  }

  changePage(page: 'andamento' | 'concluido') {
    this.page = page;
    this.getToDos();
  }

  getToDos() {
    this.todos = this.todosService.getInLocalStorage().filter((todo) => {
      return this.page == 'andamento' ? !todo.done : todo.done;
    });
  }

  togleForms() {
    this.formsVisible = !this.formsVisible;
  }

  onSubmit() {
    if (this.formGroup.valid) {
      this.todosService.createTodo(this.formGroup.value as ITodo);
      this.getToDos();
      this.formGroup.reset();
      this.formGroup.controls.done.setValue(false);
    }
  }

  changeStateTodo(todo: ITodo) {
    this.todosService.todosState()[
      this.todosService.todosState().indexOf(todo)
    ].done = true;
    this.todosService.setInLocalStorage();
    this.getToDos();
  }

  deleteTodo(todo: ITodo) {
    this.todosService
      .todosState()
      .splice(this.todosService.todosState().indexOf(todo), 1);
    this.todosService.setInLocalStorage();
    this.getToDos();
  }
}
