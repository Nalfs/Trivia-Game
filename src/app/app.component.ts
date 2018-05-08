import { Component } from '@angular/core';
import { Quiz } from './quiz';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quiz: Quiz;
  quizList: Quiz[];
  constructor () {
    const quiz = new Quiz(
      'Kategori',
      'typ',
      'diff',
      'fråga1',
      'svaret',
      ['fel1', 'fel2'],
     );
     this.quizList = [quiz];
  }
}
