import { LoginComponent } from './login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { loginRoutingModule } from './login-routing.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './components/register.component';
import { SignInComponent } from './components/sign-in.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    SignInComponent
  ],
  imports: [
    CommonModule,
    loginRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule

  ]
})
export class LoginModule { }
