import { Component, OnInit } from '@angular/core';
import { DatastoreService } from '../datastore/datastore.service';

@Component({
  selector: 'app-secondary',
  templateUrl: './secondary.component.html',
  styleUrls: ['./secondary.component.scss']
})
export class SecondaryComponent implements OnInit {
  words: Array<string>;
  inputText: string;

  constructor(private _datastoreService: DatastoreService) {
    this._datastoreService.words.subscribe((words) => this.words = [...words]);
  }

  ngOnInit() {
  }

  addWord(newWord) {
    this._datastoreService.addNewWord(newWord);
  }

  addPrivateWord(newWord) {
    this.words.push(newWord);
  }

}
