import {Component, Input} from '@angular/core';
import {Joke} from '../../services/jokes.service';

@Component({
  selector: 'new-joke',
  templateUrl: './newJoke.component.html',
  styleUrls: ['./newJoke.component.css']
})
export class NewJokeComponent {
  downloadJoke: Joke;
  fontSize: string;
  fontFamily: string;

  @Input()
  set joke(jd: Joke) {
    this.downloadJoke = jd;
    this.randomFontSize();
    this.randomFontFamily();
  }

  randomFontSize() {
    this.fontSize = (Math.round(Math.random() * (30 - 10) + 10)) + 'px';
  }

  randomFontFamily() {
    const arr = ['Geneva', 'Arial', 'Helvetica', 'sans-serif', 'Georgia', 'Times New Roman', 'Times', 'serif'];
    this.fontFamily = arr[Math.round(Math.random() * 1000) % arr.length];
  }
}
