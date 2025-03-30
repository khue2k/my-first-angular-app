import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent implements OnInit {
  public name=new FormControl('');

  constructor() {
  }

  ngOnInit(): void {

  }
  updateName(name: string): void {
    this.name.setValue('Nancy');
    console.log(this.name.value);
  }


}
