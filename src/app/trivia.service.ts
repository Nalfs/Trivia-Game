import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TriviaService {

  constructor(private http: HttpClient) { }

  getTrivia() {
    return this.http.get('https://opentdb.com/api.php?amount=10&category=20&difficulty=medium&type=boolean');
  }

}
