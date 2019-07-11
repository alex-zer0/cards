import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Observable, Subject } from 'rxjs';
import { startWith, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { User } from '../../interfaces/user';
import { Paged } from '../../interfaces/paged';

@Component({
  selector: 'app-cards-view',
  templateUrl: './cards-view.component.html'
})
export class CardsViewComponent implements OnInit {
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
