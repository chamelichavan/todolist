import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddTodoComponent } from '../add-todo/add-todo.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [{ path: '', component: AddTodoComponent }];

@NgModule({
  declarations: [AddTodoComponent],
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes)],
})
export class TodoModule { }
