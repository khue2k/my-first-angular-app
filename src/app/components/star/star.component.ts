import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-star',
  standalone: true,
  imports: [],
  templateUrl: './star.component.html',
  styleUrl: './star.component.css'
})
export class StarComponent implements OnInit {
  @Input()
  rating: number = 0;

  @Output()
  ratingClick: EventEmitter<String> = new EventEmitter();
  rate() {
    console.log('star rating')
  }
  ngOnInit(): void {
  }

}
