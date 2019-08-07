import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  //Properties
  animal = ''; 
  question = 'Te ha gustado la app en Angular?';
  response;

  //Function
  answer(value) {
    this.response = value;
  }
}
