import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TodoListItem} from "./todo-list-item/todo-list-item.component";
import {TodoList} from "./todo-list/todo-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodoListItem, TodoList],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-first-angular-app';
}
