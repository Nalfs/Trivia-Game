import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TriviaService } from './trivia.service';
import { AppComponent } from './app.component';
import { QuizListaComponent } from './quiz-lista/quiz-lista.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizListaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [TriviaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
