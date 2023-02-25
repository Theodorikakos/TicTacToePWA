import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button nbButton *ngIf="!value">{{ value }}</button>
    <button style="background-color:#7c69ef" *ngIf="value == 'X'">
      {{ value }}
    </button>
    <button style="background-color:#df4759" *ngIf="value == 'O'">
      {{ value }}
    </button>
  `,
  styles: ['button { width: 100%; height: 100%; font-size: 5em !important; }'],
})
export class SquareComponent {
  @Input() value: 'X' | 'O' | string;
}
