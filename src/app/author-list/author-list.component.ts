import { Component } from '@angular/core';
import {Author} from "../author-detail/author-detail.service";

@Component({
  selector: 'app-author-list',
  standalone: true,
  imports: [],
  templateUrl: './author-list.component.html',
  styleUrl: './author-list.component.css'
})
export class AuthorListComponent {
  public authors: Author[] = [];

}
