import {Component} from '@angular/core';
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public isDanger: boolean = false;
  public isWarning: boolean = false;
  public classes: any = ['background-yellow', 'red-bolder']

  toggleDanger() {
    this.isDanger = !this.isDanger;
  }

  toggleWarning() {
    this.isWarning = !this.isWarning;
  }
}
