import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'abc';
  message = 'Hello World!';

  onHomeClick() {
    const temp = this.title;
    this.title = this.message;
    this.message = temp;
  }
}
