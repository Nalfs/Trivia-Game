import { Component } from '@angular/core';
import { Quiz } from './quiz';
import { TriviaService } from './trivia.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  quiz: Quiz;
  quizList: Quiz[];
  constructor(private triviaService: TriviaService) {
    this.triviaService.getTrivia();
  }
  getTrivia() {
    .subscribe((quiz: any) => {
      console.error(quiz);
      this.quiz = {
        category: taco.base_layer.recipe,
      };
  });
}}
