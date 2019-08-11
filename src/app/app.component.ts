import { Component } from '@angular/core';
import {AnswerService} from './services/answer.service';

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
  result: any = [];
  APIUrl: string = 'https://yesno.wft/api';
  question_two: string = 'Qué te gustaría saber?'
  btnResutl: string = 'Descúbrelo aquí';

  constructor(private answerService:AnswerService) {};

  answerQuestion():void {
    this.answerService
    .getAnswer(this.APIUrl)
    .suscribe(
      resultQuestion => (this.result = resultQuestion),
      error => (console.log('Upps! Hubo un error'),error)
    )
  }

  //Function
  answer(value) {
    this.response = value;
  }
}
