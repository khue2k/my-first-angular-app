import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  public name='Khue123';
  public  fruit=['apple','banana']
  ngOnInit(): void {
  }

}
