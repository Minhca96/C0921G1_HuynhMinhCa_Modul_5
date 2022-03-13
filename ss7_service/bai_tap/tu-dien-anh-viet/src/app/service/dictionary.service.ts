import { Injectable } from '@angular/core';
import {Dictionary} from '../module/dictionary';
import {installTempPackage} from '@angular/cli/tasks/install-package';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  dictionaryS: Dictionary[] = [
    {
      english: 'hello',
      vietnamese: 'xin chào'
    },
    {
      english: 'school',
      vietnamese: 'trường học'
    },
    {
      english: 'class',
      vietnamese: 'lớp học'
    },
    {
      english: 'go',
      vietnamese: 'đi lại'
    },
    {
      english: 'goodbye',
      vietnamese: 'tạm biệt'
    },
    {
      english: 'what',
    vietnamese: 'cái gì'
    }
  ]

  constructor() { }

  findWordsByEnglish(english: string){
    return this.dictionaryS.find(item => item.english === english)
  }

}
