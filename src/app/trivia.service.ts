import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Quiz } from './quiz';

@Injectable({
  providedIn: 'root'
})
export class TriviaService {
  quizList: Quiz[];

  constructor(private http: HttpClient) { }

  getTrivia() {
    const url = 'https://opentdb.com/api.php?amount=10';
    return this.http.get(url);
  }

}
