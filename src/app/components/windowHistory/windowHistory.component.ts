import {Component, Input} from '@angular/core';
import {Joke} from '../../services/jokes.service';

@Component({
  selector: 'window-history',
  templateUrl: './windowHistory.component.html',
  styleUrls: ['./windowHistory.component.css']
})
export class WindowHistoryComponent {

  @Input()
  set toHistory(joke: Joke) {
    if (joke) { this.jokes.push(joke.value.joke); }

  }

  jokes: string[] = [];

}
