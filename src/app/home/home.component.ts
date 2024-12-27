import {Component, Input, OnInit} from '@angular/core';
import {HomeServiceService} from "./home-service.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
  }
  @Input() data : string | undefined;

  private homeService = new HomeServiceService();
  username = 'khue1234';

  message: string | undefined;

  homeBtn() {
    console.log(this.homeService.add(1, 2));
    console.log("ok")
  }

  onUsernameChange() {
    console.log(this.username)
  }

  changeMessage(){
    this.message='Way to go 🚀'
  }
}
