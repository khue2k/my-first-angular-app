import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {TodoListItem} from "./todo-list-item/todo-list-item.component";
import {TodoList} from "./todo-list/todo-list.component";
import {HomeComponent} from "./home/home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodoListItem, TodoList, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'abc';
}
