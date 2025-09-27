import {Component} from '@angular/core';
import {Author, authors} from "../author-detail/author-detail.service";
import {AuthorDetailComponent} from "../author-detail/author-detail.component";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-author-list',
  standalone: true,
  imports: [
    AuthorDetailComponent,
    NgForOf
  ],
  templateUrl: './author-list.component.html',
  styleUrl: './author-list.component.css'
})
export class AuthorListComponent {
  public authors: Author[] = authors;
  public currentAuthor:any=this.authors[0]
  onSelect(event: Author) {
    this.currentAuthor=event;
  }

  onDelete(author: Author) {
    this.authors=this.authors.filter(a => a.id !== author.id);
    console.log(this.authors);
  }
}
