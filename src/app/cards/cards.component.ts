import { Component, OnInit } from '@angular/core';
import { UsersService, Paged, User } from '../services/users.service';
import { Observable, Subject } from 'rxjs';
import { startWith, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html'
})
export class CardsComponent implements OnInit {
  users$: Observable<Paged<User>>;
  pageNumber$ = new Subject<number>();

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.users$ = this.pageNumber$
      .pipe(
        startWith(1),
        distinctUntilChanged(),
        switchMap(page => this.usersService.fetchByPage(page))
      );
  }

  setPage(page: number) {
    this.pageNumber$.next(page);
  }
}
