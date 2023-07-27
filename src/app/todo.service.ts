import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todos: any[] = []; // Array to store todo items
  private todosSubject = new Subject<any[]>(); // Subject to emit updates

  getTodos() {
    return this.todosSubject.asObservable();
  }

  addTodo(todo: any) {
    this.todos.push(todo);
    this.updateTodos();
  }

  updateTodo(todo: any) {
    const index = this.todos.findIndex((t) => t.id === todo.id);
    if (index !== -1) {
      this.todos[index] = todo;
      this.updateTodos();
    }
  }

  deleteTodo(todoId: number) {
    this.todos = this.todos.filter((t) => t.id !== todoId);
    this.updateTodos();
  }

  private updateTodos() {
    this.todosSubject.next([...this.todos]);
  }
}
