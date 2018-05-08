import { Component, Input, OnInit } from '@angular/core';
import { Quiz } from '../quiz';
import { TriviaService } from '../trivia.service';

@Component({
  selector: 'app-quiz-lista',
  templateUrl: './quiz-lista.component.html',
  styleUrls: ['./quiz-lista.component.css']
})
export class QuizListaComponent implements OnInit {
  quizList: Quiz[];

  constructor(private triviaService: TriviaService) { }


  ngOnInit() {
    this.triviaService.getTrivia()
    .subscribe((trivia: Triva) => {
      this.quizList = trivia.results;
    });
  }


}
