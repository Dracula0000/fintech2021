import { Component } from '@angular/core';
import { MaterialModule } from './shared/material/material.module';
import { NgForm, NgModel } from '@angular/forms';


@Component({
  selector: 'ac-root',
  template: `
    <div >
      <div>
          <form #f="ngForm" (submit)="loginHandler(f)">

              <mat-card style="width: 200px;
                  height: 200px;
                  margin: 100px auto;"  >
                <mat-card-title></mat-card-title>
                <mat-card-subtitle>
                  <!-- Login -->
                  <div *ngIf="!viewRegisterArea">
                      <span class="material-icons">account_circle</span>
                          <mat-form-field appearance="fill">
                            <mat-label>Email</mat-label>
                            <input matInput
                              type="email"
                              placeholder="you@example.com"
                              ngModel name="lemail"
                              required email
                              #lemailRef="ngModel"
                              [ngClass]="checkField(lemailRef)">
                          </mat-form-field>
                          <br/>
                      <span class="material-icons">https</span>
                          <mat-form-field appearance="fill">
                            <mat-label>Password</mat-label>
                            <input matInput type="password"
                            required
                            ngModel name="lPassword"
                            #lPasswordRef="ngModel"
                            [ngClass]="checkField(lPasswordRef)">
                          </mat-form-field>
                    </div>

                    <!-- Registrati -->
                    <div *ngIf="viewRegisterArea">

                          <mat-form-field appearance="fill">
                            <mat-label>Email</mat-label>

                            <input matInput
                              type="email"
                              placeholder="you@example.com"
                              ngModel name="email"
                              required email
                              #emailRef="ngModel"
                              [ngClass]="checkField(emailRef)">
                          </mat-form-field>
                          <br/>

                          <mat-form-field appearance="fill">
                            <mat-label>Nome</mat-label>
                            <input matInput type="text"
                            required
                            ngModel name="mNome"
                            #mNomeRef="ngModel"
                            [ngClass]="checkField(mNomeRef)">
                          </mat-form-field>

                          <mat-form-field appearance="fill">
                            <mat-label>Cognome</mat-label>
                            <input matInput type="text"
                            required
                            ngModel name="mCognome"
                            #mCognomeRef="ngModel"
                            [ngClass]="checkField(mCognomeRef)">
                          </mat-form-field>

                          <mat-form-field appearance="fill">
                            <mat-label>RegPassword</mat-label>
                            <input matInput type="RegPassword"
                            required
                            ngModel name="mRegPassword"
                            #mRegPasswordRef="ngModel"
                            [ngClass]="checkField(mRegPasswordRef)">
                          </mat-form-field>

                          <mat-form-field appearance="fill">
                            <mat-label>RegConfirmPassword</mat-label>
                            <input matInput type="RegConfirmPassword"
                            required
                            ngModel name="mRegConfirmPassword"
                            #mRegConfirmPasswordRef="ngModel"
                            [ngClass]="checkField(mRegConfirmPasswordRef)">
                          </mat-form-field>


                    </div>

                  </mat-card-subtitle>
                  <mat-card-actions>
                      <button type="submit" mat-flat-button color="primary" [disabled]="f.invalid">Accedi</button>
                      <button mat-button color="primary" (click)="RegisterAreaHandler()">Crea un nuovo account</button>
                  </mat-card-actions>
              </mat-card>

        </form>
      </div>
    </div>

    <router-outlet></router-outlet>
  `,
  styles: [`
  div#orizzontale {
    width: 200px;
    height: 200px;
    background: #25FF00;
    margin: 0 auto;
    }
  div#verticale {
      width: 200px;
      height: 200px;
      background: #25FF00;
      position: absolute;
      top: 50%;
      left: 50%;
      margin-top: -100px;
      margin-left: -100px;
      }

    `
  ]
})

export class AppComponent {
  title = 'Fintech';
  viewRegisterArea : boolean = false;

  loginHandler(form : any){
    console.log('Ciao')
  }

  RegisterAreaHandler() {
    this.viewRegisterArea = !this.viewRegisterArea;
  }

  checkField(input: NgModel) {
    return { 'is-invalid': input.invalid, 'is-valid': input.valid}
  }
/*
controlla che i valori dei due campi coincidano! Segnati per comodità un TODO, questo sarà il caso in cui scriveremo un validatore custom.*/
}
