import { effect, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  todosState = signal<ITodo[]>([]);

  createTodo(values: ITodo) {
    this.getInLocalStorage();
    this.todosState.update((todos) => {
      todos.push(values);
      return todos;
    });
    this.setInLocalStorage();
  }

  setInLocalStorage() {
    localStorage.setItem('TODOS', JSON.stringify(this.todosState()));
  }

  getInLocalStorage() {
    const inLocalStorage = localStorage.getItem('TODOS');
    if (inLocalStorage) {
      this.todosState.set(JSON.parse(inLocalStorage));
    }
    return this.todosState()
  }
}
