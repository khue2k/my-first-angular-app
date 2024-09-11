import {Component} from "@angular/core";
import {TodoListItem} from "../todo-list-item/todo-list-item.component";
import {FormsModule} from "@angular/forms";

@Component({
  standalone: true,
  selector: 'todo-list',
  templateUrl: `./todo-list.component.html`,
  imports: [
    TodoListItem,
    FormsModule
  ],
  styleUrl: 'todo-list.component.css'
})
export class TodoList {
  taskTitle = 'Read cup of coffee';
  testId = 'main-cta';
  isAdmin = true;
  ingredientList = [
    {name: 'noodles', quantity: 1},
    {name: 'miso broth', quantity: 1},
    {name: 'egg', quantity: 2},
  ];
  save() {

  }

  validateInput() {

  }


}
