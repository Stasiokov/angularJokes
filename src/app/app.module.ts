import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppComponent} from './app.component';
import {NewJokeComponent} from './components/newJoke/newJoke.component';
import {WindowHistoryComponent} from './components/windowHistory/windowHistory.component';
import {JokesService} from './services/jokes.service';

@NgModule({
  declarations: [
    AppComponent,
    NewJokeComponent,
    WindowHistoryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  providers: [JokesService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
