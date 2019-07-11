import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  template: `
    <div class="pagination">
      <button *ngIf="isPrevAvailable" class="pagination__btn" (click)="setPage.emit(page - 1)">PREV</button>
      <button *ngIf="isNextAvailable" class="pagination__btn" (click)="setPage.emit(page + 1)">NEXT</button>
    </div>
  `,
  styleUrls: ['./pagination.component.scss']
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
