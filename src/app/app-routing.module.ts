import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'login', loadChildren: () => import ('./views/login.component').then(m => m.LoginComponent)},
  { path: 'cards', loadChildren: () => import ('./views/cards.components').then(m => m.CardsComponent)},
  { path: 'movements', loadChildren: () => import ('./views/movements.component').then(m => m.MovementsComponent)},
  { path: '', redirectTo: 'cards', pathMatch: 'full'},

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
