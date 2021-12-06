import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardsRoutingModule } from './cards-routing.module';
import { CardsComponent } from './cards.components';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { CardFormComponent } from './components/card-form.component';
import { CardListComponent } from './components/card-list.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CardsComponent,
    CardFormComponent,
    CardListComponent
  ],
  imports: [
    CommonModule,
    CardsRoutingModule,
    MaterialModule,
    ReactiveFormsModule

  ]
})
export class CardsModule { }
