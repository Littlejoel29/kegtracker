import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template: `

  <ul class="list-group">
    <li [class]="shortageColor(currentKeg)" *ngFor="let currentKeg of childKegList">
      <h4>{{currentKeg.name}}</h4>Price: <strong>$ {{currentKeg.price}}</strong>
      <h6>Pints Remaining: {{ currentKeg.pints }}</h6>
      <button (click)="editButtonHasBeenClicked(currentKeg)">Edit Keg</button>
          <button (click) = "pintButtonHasBeenClicked(currentKeg)">Pint Sold </button>
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
  pintButtonHasBeenClicked(kegToSubtract : Keg) {
    if (kegToSubtract.pints > 0) {
    kegToSubtract.pints -= 1;
  } else {
    alert("you have no more pints dammit!");            
  }
  }
  shortageColor(currentKeg) {
    if (currentKeg.pints > 80) {
      return "list-group-item list-group-item-info";
    } else if (currentKeg.pints > 20) {
      return "list-group-item list-group-item-warning";
    } else {
      return "list-group-item list-group-item-danger";
    }
  }
}
