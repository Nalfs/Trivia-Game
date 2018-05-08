import { Component, Input, OnInit } from '@angular/core';
import { Quiz } from '../quiz';
import { TriviaService } from '../trivia.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-quiz-lista',
  templateUrl: './quiz-lista.component.html',
  styleUrls: ['./quiz-lista.component.css']
})
export class QuizListaComponent implements OnInit {

  trivia: any [];

  constructor(private http: HttpClient, private triviaService: TriviaService) { }

  @Input() quizList: Quiz[];

  ngOnInit() {
    this.getTrivia();
  }
  getTrivia() {
    this.triviaService.getTrivia()
    .subscribe((trivia: any) => {
      this.trivia = trivia;
      console.error('trivia', trivia);
    });
  }
}
