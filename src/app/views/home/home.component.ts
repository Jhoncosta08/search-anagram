import { Component } from '@angular/core';
import {JsonEditorComponent} from '../../components/json-editor/json-editor.component';
import {UtilsService} from '../../services/utils/utils.service';
import {CommonModule} from '@angular/common';
import {AnagramInterface} from '../../interfaces/anagram.interface';

@Component({
  selector: 'app-home',
  imports: [JsonEditorComponent, CommonModule,],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  anagrams: string[] = [];

  constructor(private utilsService: UtilsService) {}

  getJsonEditorData(jsonData: AnagramInterface[]): void {
    this.anagrams = this.utilsService.searchAnagram(jsonData);
  }

}
