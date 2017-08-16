import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'pint-sold',
  template: `

  `
})

export class PintSoldComponent {
  @Input() childSelectedKeg: Keg;
  @Output() clickSender = new EventEmitter();

  pintButtonHasBeenClicked(kegToSubtract : Keg) {
    kegToSubtract.pints -= 1;

  }
}
