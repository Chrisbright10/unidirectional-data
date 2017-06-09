import { Component, OnInit } from '@angular/core';
import { DatastoreService } from '../datastore/datastore.service';

@Component({
  selector: 'app-primary',
  templateUrl: './primary.component.html',
  styleUrls: ['./primary.component.scss']
})
export class PrimaryComponent implements OnInit {
  words: Array<string>;
  inputText: string;

  constructor(private _datastoreService: DatastoreService) {
    this._datastoreService.words.subscribe((words) => this.words = words);
  }

  ngOnInit() {
  }

  addWord(newWord) {
    this.words.push(newWord);
  }

}
