
import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  template: `
  <form>
    <h1>New Keg</h1>
    <div class="form-group">
      <label>Beer Name:</label>
      <input #newName>
    </div>
    <div class="form-group">
      <label>Brand Name:</label>
      <input #newBrand>
    </div>
    <div class="form-group">
      <label>Beer Price Per Pint:</label>
      <input #newPrice type="number">
    </div>
    <div class="form-group">
      <label>Alcohol Content:</label>
      <input #newAC type="number">
    </div>
    <button (click)="addBeer(newName.value, newBrand.value, newPrice.value, newAC.value); newName.value=''; newBrand.value=''; newPrice.value=''; newAC.value='';">Add Beer!</button>
  </form>
  `

})

export class NewKegComponent {
  @Output() newKegSender = new EventEmitter();
  addBeer(name: string, brand: string, price: string, alcohol: string) {
    if (name==="" || brand === "" || price==="" || alcohol===""){
      alert("You must put values into each field!");
    } else {
    var convertedPrice = Number(price);
    var convertedAlcohol = Number(alcohol);
    var newKegToAdd: Keg = new Keg(name, brand, convertedPrice, convertedAlcohol);
    this.newKegSender.emit(newKegToAdd);
  }
}

}
