import { Component, OnInit } from '@angular/core';
import {DictionaryService} from '../service/dictionary.service';
import {Dictionary} from '../module/dictionary';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  dictionary: Dictionary ;
  keySearch: string;
  constructor(private dictionaryService: DictionaryService
  ) { }

  ngOnInit(): void {
    this.getWord();
  }
  getWord(){
    console.log(this.keySearch);
  this.dictionary = this.dictionaryService.findWordsByEnglish(this.keySearch)
  }

}
