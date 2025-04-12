import {Component, Input, OnInit, Output} from '@angular/core';
import {Author} from "./author-detail.service";
import {NgIf} from "@angular/common";
import EventEmitter from "node:events";

@Component({
  selector: 'app-author-detail',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './author-detail.component.html',
  styleUrl: './author-detail.component.css'
})
export class AuthorDetailComponent implements OnInit {
  @Input() author: Author | undefined;
  // @ts-ignore
  @Output() deleteAuthor = new EventEmitter<Author>();

  ngOnInit(): void {

  }

  handleDelete() {
    // @ts-ignore
    this.deleteAuthor.emit(this.author);
  }
}
