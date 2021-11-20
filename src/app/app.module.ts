import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './shared/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';
//import custom
import { LoginComponent } from './views/login.component';
import { SignInComponent } from './views/sign-in.component';
import { RegisterComponent } from './views/register.component';
import { CardListComponent } from './views/card-list.component';

import { CardFormComponent } from './views/card-form.component';
import { CardsComponent } from './views/cards.components';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignInComponent,
    RegisterComponent,
    CardListComponent,
    CardFormComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
