import {Component} from '@angular/core';
import {RouterLink, RouterOutlet} from "@angular/router";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet, NgIf],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Sửa lỗi "styleUrl" thành "styleUrls"
})
export class AppComponent {
  isLoggedIn: boolean = true;

}
