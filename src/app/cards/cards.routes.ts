import { Routes, RouterModule } from '@angular/router';
import { CardsLayoutComponent } from './cards-layout.component';
import { CardsViewComponent } from './components/cards-view/cards-view.component';
import { CardViewComponent } from './components/card-view/card-view.component';

const routes: Routes = [
  {
    path: '',
    component: CardsLayoutComponent,
    children: [
      {
        path: '',
        component: CardsViewComponent,
        pathMatch: 'full'
      },
      {
        path: ':id',
        component: CardViewComponent
      }
    ],
  },
];

export const CardsRouting = RouterModule.forChild(routes);
