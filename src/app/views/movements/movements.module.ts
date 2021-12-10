
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { MovementsRoutingModule } from './movements-routing.module';
import { MovementsComponent } from './movements.component';
import { MovementComponent } from './components/movement.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    MovementsComponent,
    MovementComponent,

  ],
  imports: [
    CommonModule,
    MovementsRoutingModule,
    MaterialModule,
    SharedModule

  ]
})
export class MovementsModule { }
