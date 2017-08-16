import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template: `

  <ul class="list-group">
    <li class="list-group-item" *ngFor="let currentKeg of childKegList">
      <h4>{{currentKeg.name}}</h4>Price: <strong>$ {{currentKeg.price}}</strong>
      <button (click)="editButtonHasBeenClicked(currentKeg)">Edit Keg</button>
    </li>
  </ul>
  `
})

export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();

  editButtonHasBeenClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }

}
