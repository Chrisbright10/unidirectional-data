import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DatastoreService {
  private _words: BehaviorSubject<Array<string>>;
  public words: Observable<Array<string>>;

  constructor() {
    this._words = new BehaviorSubject(new Array<string>());
    this.words = this._words.asObservable();
    this.addNewWord('initialState');
  }

  public addNewWord(newWord: string) {
    const newState = Object.assign(new Array<string>(), this._words.getValue());
    newState.push(newWord);
    this._words.next(newState);
  }

}
