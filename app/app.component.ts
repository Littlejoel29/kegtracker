import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <div class="jumbotron">
      <h1>Keg Tracker</h1>
      <h3>{{subtitle}}</h3>
    </div>
  </div>
  `
})

export class AppComponent {
  subtitle: string = 'Log Pint Pours and Track Keg Status';

}
