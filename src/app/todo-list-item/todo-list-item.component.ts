// todo-list-item.component.ts
import {Component} from "@angular/core";

@Component({
  selector: 'todo-list-item',
  templateUrl: 'todo-list-item.component.html',
  styleUrl: 'todo-list-item.component.css',
  standalone: true,
})
export class TodoListItem {
  /* Component behavior is defined in here */
  taskTitle = '';
  isCompleted = false;

  completeTask() {
    this.isCompleted = true;
  }

  upDateTitle(newTitle: string) {
    this.taskTitle = newTitle;
  }

}
