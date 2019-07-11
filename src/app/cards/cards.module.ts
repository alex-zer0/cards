import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { CardsRouting } from './cards.routes';
import { UsersService } from './services/users.service';
import { CardsLayoutComponent } from './cards-layout.component';
import { CardsViewComponent } from './components/cards-view/cards-view.component';
import { CardsCardComponent } from './components/cards-card/cards-card.component';
import { CardsListComponent } from './components/cards-list/cards-list.component';
import { CardViewComponent } from './components/card-view/card-view.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
    CardsRouting
  ],
  providers: [
    UsersService
  ],
  declarations: [
    CardsLayoutComponent,
    CardsViewComponent,
    CardViewComponent,
    CardsCardComponent,
    CardsListComponent,
  ]
})
export class CardsModule {}
