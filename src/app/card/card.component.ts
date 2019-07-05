import { Component, OnInit } from '@angular/core';
import { User, UsersService } from '../services/users.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-cards',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  user$: Observable<User>;

  constructor(
    private usersService: UsersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.user$ = this.route.params
      .pipe(
        switchMap(({ id }) => this.usersService.fetchById(id))
      );
  }
}
