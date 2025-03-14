import { Injectable } from '@angular/core';
import {AnagramInterface} from '../../interfaces/anagram.interface';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  searchAnagram(arr: AnagramInterface[]): string[] {
    const wordMap: { [key: string]: string[] } = {};
    const anagrams: string[] = [];
    arr.forEach((obj: AnagramInterface): void => {
      if (obj.word) {
        const filteredWords: string = obj.word.split('').sort().join('');
        if (wordMap[filteredWords]) {
          wordMap[filteredWords].push(obj.word);
        } else {
          wordMap[filteredWords] = [obj.word];
        }
      }
    });
    Object.keys(wordMap).forEach((key: string): void => {
      if (wordMap[key].length > 1) {
        anagrams.push(...wordMap[key]);
      }
    });
    return anagrams;
  }

  openInNewTab(src: string): any {
    window.open(src, '_blank');
  }

}
