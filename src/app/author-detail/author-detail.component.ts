import {Component, Input, Output} from '@angular/core';
import {Author} from "./author-detail.service";
import {NgIf} from "@angular/common";
import {EventEmitter} from '@angular/core';

@Component({
  selector: 'app-author-detail',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './author-detail.component.html',
  styleUrl: './author-detail.component.css'
})
export class AuthorDetailComponent {
  @Input() author: Author | undefined;

  @Output() authorSelect = new EventEmitter<Author>();
  @Output() authorDelete = new EventEmitter<Author>();


  select(author: Author | undefined) {
    this.authorSelect.emit(author);
  }

  delete(author: Author | undefined) {
    this.authorDelete.emit(author);
  }
}
