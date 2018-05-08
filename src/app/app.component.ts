import { Component } from '@angular/core';
import { Quiz } from './quiz';

class Triva {
  result_code: number;
  results: Quiz[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  quiz: Quiz;
  quizList: Quiz[];
  constructor() {
  }


}
