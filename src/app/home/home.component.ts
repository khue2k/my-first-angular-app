import {Component, Input, OnInit} from '@angular/core';
import {HomeServiceService} from "./home-service.service";

@Component({
  selector: 'home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
  }

  private homeService = new HomeServiceService();

  homeBtn() {
    console.log("huhuhuh");
    console.log(this.homeService.add(1, 2));
  }


}
