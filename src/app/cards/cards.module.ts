import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { CardsComponent } from './cards.component';
import { CardsCardComponent } from './cards-card/cards-card.component';
import { CardsListComponent } from './cards-list/cards-list.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    CardsComponent,
    CardsCardComponent,
    CardsListComponent
  ],
  exports: [
    CardsComponent
  ]
})
export class CardsModule {}
