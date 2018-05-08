import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TriviaService } from './trivia.service';
import { AppComponent } from './app.component';
import { QuizListaComponent } from './quiz-lista/quiz-lista.component';
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    QuizListaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [TriviaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
