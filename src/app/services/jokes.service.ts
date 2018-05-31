import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/index';

export interface Joke {
  type: string;
  value: {
    id: number;
    joke: string;
    categories: [string];
  };
}

@Injectable()
export class JokesService {
  constructor(private httpClient: HttpClient) {
  }

  getJoke(): Observable<Joke> {
    return this.httpClient.get<Joke>(`https://api.icndb.com/jokes/random`);
  }
}
