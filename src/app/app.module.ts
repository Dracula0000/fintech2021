

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './shared/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';
//import custom

import { SignInComponent } from './views/sign-in.component';
import { RegisterComponent } from './views/register.component';

import { ContacsComponent } from './views/contacts.component';
import { ContactListComponent } from './views/contact-list.component';
import { ContactFormComponent } from './views/contact-form.component';
import { TransferComponent } from './views/transfer.component';
import { AppointementsComponent } from './views/appointments.components';


@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    RegisterComponent,
    ContacsComponent,
    ContactListComponent,
    ContactFormComponent,
    TransferComponent,
    AppointementsComponent
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
