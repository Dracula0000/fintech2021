import { MovementsComponent } from './views/movements/movements.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: 'login', loadChildren: () => import ('./views/cards/cards.module').then(m => m.CardsModule)},
  { path: 'cards', loadChildren: () => import ('./views/cards/cards.module').then(m => m.CardsModule)},
  { path: 'movements', loadChildren: () => import ('./views/movements/movements.module').then(m => m.MovementsModule)},
  { path: 'transfer', loadChildren: () => import ('./views/cards/cards.module').then(m => m.CardsModule)},
  { path: 'apointements', loadChildren: () => import ('./views/cards/cards.module').then(m => m.CardsModule)},
  { path: 'logout', loadChildren: () => import ('./views/cards/cards.module').then(m => m.CardsModule)},
  { path: '**', redirectTo: 'cards'},

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
