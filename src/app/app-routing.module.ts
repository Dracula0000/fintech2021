import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: 'login', loadChildren: () => import ('./views/login/login.module').then(m => m.LoginModule)},
  { path: 'cards', loadChildren: () => import ('./views/cards/cards.module').then(m => m.CardsModule)},
  { path: 'movements', loadChildren: () => import ('./views/movements/movements.module').then(m => m.MovementsModule)},
  { path: 'transfer', loadChildren: () => import ('./views/login/login.module').then(m => m.LoginModule)},
  { path: 'apointements', loadChildren: () => import ('./views/login/login.module').then(m => m.LoginModule)},
  { path: 'logout', loadChildren: () => import ('./views/login/login.module').then(m => m.LoginModule)},
  { path: '**', redirectTo: 'login'},

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
