import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todo';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo:Todo;
  @Output() todoDelete: EventEmitter <Todo> = new EventEmitter();
  @Output() todoCheckbox: EventEmitter <Todo> = new EventEmitter();

  onClick(todo:Todo){
    this.todoDelete.emit(todo);
    console.log("delete is triggered");
  }

  onCheckboxClick(todo){
    this.todoCheckbox.emit(todo);

  }



  constructor() { }

  ngOnInit(): void {
  }

}
