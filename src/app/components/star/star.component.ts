import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-star',
  standalone: true,
  imports: [],
  templateUrl: './star.component.html',
  styleUrl: './star.component.css'
})
export class StarComponent implements OnInit ,OnChanges{
  @Input()
  rating: number = 0;

  @Output()
  ratingClick: EventEmitter<String> = new EventEmitter();
  rate() {
    console.log('star rating')
    this.ratingClick.emit(`Rating: ${this.rating}`);
  }
  ngOnInit(): void {
    console.log('ngOnInit');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges", changes);
  }

}
