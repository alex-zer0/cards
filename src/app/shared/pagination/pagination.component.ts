import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  template: `
    <button *ngIf="isPrevAvailable" (click)="setPage.emit(page - 1)">PREV</button>
    <button *ngIf="isNextAvailable" (click)="setPage.emit(page + 1)">NEXT</button>
  `,
  styles: [`
    :host { padding: 1rem }
  `]
})
export class PaginationComponent {
  @Input() page: number;
  @Input() total: number;

  @Output() setPage = new EventEmitter<number>();

  get isPrevAvailable() {
    return this.page > 1;
  }
  get isNextAvailable() {
    return this.total > this.page;
  }
}
