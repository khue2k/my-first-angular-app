import {Component, OnInit} from '@angular/core';
import {HomeServiceService} from "./home-service.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'home',
  standalone: true,
  imports: [FormsModule ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
  }

  private homeService = new HomeServiceService();
  username= '';

  homeBtn() {
    console.log(this.homeService.add(1, 2));
  }

  onUsernameChange(){
    console.log(this.username)
  }
}
