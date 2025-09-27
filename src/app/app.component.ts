import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {ToggleComponent} from "./toggle/toggle.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, ToggleComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  @ViewChild("toggleComponent") toggle: ToggleComponent | undefined;
  checked: boolean= false;

  ngAfterViewInit(): void {
    console.log(this.toggle)
  }
}
