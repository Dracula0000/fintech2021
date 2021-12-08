import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApointementsComponent } from './apointements.components';
import { ApointementsRoutingModule } from './apointements-routing.module';
@NgModule({
  declarations: [
    ApointementsComponent
  ],
  imports: [
    CommonModule,
    ApointementsRoutingModule

  ]
})
export class ApointementsModule { }
