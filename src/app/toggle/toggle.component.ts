import {booleanAttribute, Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'toggle',
  standalone: true,
  imports: [],
  templateUrl: './toggle.component.html',
  styleUrl: './toggle.component.css'
})
export class ToggleComponent {
  @Input({transform: booleanAttribute}) public checked = true;
  @Output() public checkedChange = new EventEmitter<Boolean>();

  toggle(){
      this.checked = !this.checked;
      this.checkedChange.emit(this.checked);
  }
}
