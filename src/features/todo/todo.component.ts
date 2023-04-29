import { Component, Input, OnInit } from '@angular/core';
import { GetTodo, ToDoModel } from '../../model/todo.model';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class ToDoComponent implements OnInit {

  @Input() isToDoClick: boolean = false;

  getTodo = new GetTodo();
  todoList: Array<ToDoModel> = [];
  
  ngOnInit(): void {
    this.todoList = this.getTodo.getList();
  }
}
