import {Component} from '@angular/core';

import {Joke, JokesService} from './services/jokes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private jokeService: JokesService) {
  }

  joke: Joke;
  activeChuck = false;

  newJoke(): void {
    this.jokeService.getJoke().subscribe(joke => {
      this.joke = joke;
      this.activeChuck = true;
    });
  }

}
