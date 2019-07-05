import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardsComponent } from './cards/cards.component';
import { CardComponent } from './card/card.component';

const routes: Routes = [
  { path: '', component: CardsComponent, pathMatch: 'full' },
  { path: ':id', component: CardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
