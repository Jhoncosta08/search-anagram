import {Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import JSONEditor, {JSONEditorOptions} from 'jsoneditor';
import {SimpleButtonComponent} from '../simple-button/simple-button.component';
import {AnagramInterface} from '../../interfaces/anagram.interface';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-json-editor',
  templateUrl: './json-editor.component.html',
  imports: [SimpleButtonComponent, NgIf],
  styleUrl: './json-editor.component.scss'
})
export class JsonEditorComponent implements OnInit, OnDestroy {
  @ViewChild('editorContainer', { static: true }) editorContainer!: ElementRef;
  @Output() jsonEditorData: EventEmitter<any> = new EventEmitter();
  editor!: JSONEditor;
  jsonData: AnagramInterface[] = [
    { id: 1, palavra: "amor"},
    { id: 2, palavra: "roma"},
    { id: 3, palavra: "mora"},
    { id: 4, palavra: "banco"},
    { id: 5, palavra: "cabo"},
    { id: 6, palavra: "saco"},
    { id: 7, palavra: "caos"},
    { id: 8, palavra: "cavalo"},
    { id: 9, palavra: "volta"},
    { id: 10, palavra: "pato"},
    { id: 11, palavra: "topa"},
    { id: 12, palavra: "ponta"},
    { id: 13, palavra: "lobo"},
    { id: 14, palavra: "bolo"}
  ];
  showInvalidJsonMsg: boolean = false;

  ngOnInit(): void {
    const options: JSONEditorOptions = {
      mode: 'code',
      onChange: ((): void => {
        this.showInvalidJsonMsg = false;
      })
    };
    this.editor = new JSONEditor(this.editorContainer.nativeElement, options);
    if (this.jsonData) {
      this.editor.set(this.jsonData);
    }
  }

  public getJson(): AnagramInterface[] {
    return this.editor.get();
  }

  sendJsonEditorData(): void {
    const jsonData: AnagramInterface[] = this.editor.get();
    const hasIdAndWord: boolean = jsonData.every((item: AnagramInterface): boolean => item.hasOwnProperty('id') && item.hasOwnProperty('palavra'));
    if (!hasIdAndWord) {
      this.showInvalidJsonMsg = true;
      this.jsonEditorData.emit([]);
      return;
    }
    this.jsonEditorData.emit(this.getJson());
  }

  ngOnDestroy(): void {
    if (this.editor) {
      this.editor.destroy();
    }
  }

}
