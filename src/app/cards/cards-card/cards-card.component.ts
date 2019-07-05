import { Component, Input } from '@angular/core';
import { User } from 'src/app/services/users.service';

@Component({
  selector: 'app-cards-card',
  templateUrl: './cards-card.component.html',
  styleUrls: ['./cards-card.component.scss']
})
export class CardsCardComponent {
  @Input() user: User;
}
