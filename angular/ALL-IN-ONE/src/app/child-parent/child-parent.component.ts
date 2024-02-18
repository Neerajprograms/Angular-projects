import { Component,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child-parent',
  templateUrl: './child-parent.component.html',
  styleUrl: './child-parent.component.css'
})
export class ChildParentComponent {

  @Output() updateDataEvent = new EventEmitter<any>();


}
