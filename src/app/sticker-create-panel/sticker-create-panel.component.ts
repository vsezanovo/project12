import {
  Component,
  EventEmitter,
  OnInit,
  Output
} from '@angular/core';
import {
  Sticker
} from '../shared/interface/sticker.interface';

@Component({
  selector: 'app-sticker-create-panel',
  templateUrl: './sticker-create-panel.component.html',
  styleUrls: ['./sticker-create-panel.component.css']
})
export class StickerCreatePanelComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {}
  title = ""
  text = ""
  date: any
  @Output() stickerCreated = new EventEmitter < Sticker > ();
  addNote(title: string, text: string) {
    let now = Date.now();
    this.stickerCreated.emit({
      title: title,
      text: text,
      date: now,
      id: 0
    });
    this.title = ""
    this.text = ""
  }
}
