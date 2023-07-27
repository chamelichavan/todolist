import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent  implements OnInit, OnDestroy {
  todos: any[] = [];
  newTodoTitle: string = '';
  private todosSubscription: Subscription | undefined;
  showAddTodoForm: boolean = false;
  showEditTodoForm: boolean = false; 
  editTodo: any = {}; 
  lastTodoId: number = 0;

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todosSubscription = this.todoService.getTodos().subscribe((todos) => {
      this.todos = todos;
    });
  }

  ngOnDestroy() {
    
    if (this.todosSubscription) {
      this.todosSubscription.unsubscribe();
    }
  }

  addTodo() {
    debugger;
    if (this.newTodoTitle.trim() !== '') {
      const newTodo = {
       
        id:++this.lastTodoId,
       
        title: this.newTodoTitle.trim(),
        
      };

      this.todoService.addTodo(newTodo);
      this.newTodoTitle = '';
    }
  }
  updateTodo() {
    this.todoService.updateTodo(this.editTodo);
    this.showEditTodoForm = false; 
    this.editTodo = {}; 
  }

  deleteTodo(todoId: number) {
    this.todoService.deleteTodo(todoId);
  }

  toggleAddTodoForm() {
    this.showAddTodoForm = !this.showAddTodoForm;
    this.newTodoTitle = ''; 
  }

  editTodoItem(todo: any) {
    this.editTodo = { ...todo }; 
    this.showEditTodoForm = true;
  }

  cancelEdit() {
    this.showEditTodoForm = false;
    this.editTodo = {}; 
  }
}
