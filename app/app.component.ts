import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <div class="jumbotron">
      <h1>Keg Tracker</h1>
      <h3>{{subtitle}}</h3>
    </div>
    <keg-list [childKegList] = "masterKegList"></keg-list>
    <hr>
    <edit-keg [childSelectedKeg] = "selectedKeg" (doneButtonClickedSender)="finishedEditing()"></edit-keg>

  </div>
  `
})

export class AppComponent {
  subtitle: string = 'Log Pint Pours and Track Keg Status';

  masterKegList: Keg[] = [
    new Keg('SpaceDust', 'Elysian', 8, 8.2),
    new Keg('Scrimshaw', 'North Coast', 6, 5),
    new Keg('OctoberFest', 'Sam Adams', 7, 6),
    new Keg('Sunbru', 'FourPeak', 4, 8)
  ];

  selectedKeg: Keg = null;

  editKeg(clickedKeg) {
    this.selectedKeg = clickedKeg;
  }
  finishedEditing() {
    this.selectedKeg = null;
  }

}
