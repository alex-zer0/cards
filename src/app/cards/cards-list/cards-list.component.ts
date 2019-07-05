import { Component, Input } from '@angular/core';
import { User } from 'src/app/services/users.service';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.scss']
})
export class CardsListComponent {
  @Input() users: User[];
}
