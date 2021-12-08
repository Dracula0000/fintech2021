import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgModel } from '@angular/forms';

/*
controlla che i valori dei due campi coincidano! Segnati per comodità un TODO, questo sarà il caso in cui scriveremo un validatore custom.
*/

@Component({
  selector: 'ac-register-component',
  template: `
  <!-- Registrati -->
  <!-- div *ngIf="visualizza" -->

            <form #f="ngForm" (submit)="RegisterHandler(f)">
                <mat-form-field appearance="fill">
                    <mat-label>Email</mat-label>
                    <input matInput
                    type="email"
                    placeholder="you@example.com"
                    ngModel name="email"
                    required email
                    #emailRef="ngModel"
                    [ngClass]="checkField(emailRef)">
                    <mat-error *ngIf="emailRef.invalid && f.submitted">Email richiesta</mat-error>
                </mat-form-field>

                <mat-form-field appearance="fill">
                    <mat-label>Nome</mat-label>
                    <input matInput type="text"
                    required
                    ngModel name="Nome"
                    #nomeRef="ngModel"
                    [ngClass]="checkField(nomeRef)">
                    <mat-error *ngIf="nomeRef.invalid && f.submitted">Nome richiesto</mat-error>
                </mat-form-field>

                <mat-form-field appearance="fill">
                    <mat-label>Cognome</mat-label>
                    <input matInput type="text"
                    required
                    ngModel name="Cognome"
                    #cognomeRef="ngModel"
                    [ngClass]="checkField(cognomeRef)">
                    <mat-error *ngIf="cognomeRef.invalid && f.submitted">Cognome richiesto</mat-error>
                </mat-form-field>

              <mat-form-field appearance="fill">
                <mat-label>Password</mat-label>
                  <input matInput [type]="passwordHide ? 'password' : 'text'"
                  required
                  ngModel name="Password"
                  #passwordRef="ngModel"
                  [ngClass]="checkField(passwordRef)"
                >

                  <button mat-icon-button matSuffix (click)="passwordHide = !passwordHide" [attr.aria-label]="'Hide password'" [attr.aria-pressed]="passwordHide">
                    <mat-icon>{{passwordHide ? 'visibility_off' : 'visibility'}}</mat-icon>
                  </button>
                  <mat-error *ngIf="passwordRef.invalid && f.submitted">Password richiesta</mat-error>
              </mat-form-field>

              <mat-form-field appearance="fill">

                <mat-label>confirm Password</mat-label>
                <input matInput [type]="confirmPasswordHide ? 'password' : 'text'"
                  required
                  ngModel name="confirmPassword"
                  #confirmPasswordRef="ngModel"
                  [ngClass]="checkField(confirmPasswordRef)"
                >

                <button mat-icon-button matSuffix (click)="confirmPasswordHide = !confirmPasswordHide" [attr.aria-label]="'Hide confirmPassword'" [attr.aria-pressed]="confirmPasswordHide">
                  <mat-icon>{{confirmPasswordHide ? 'visibility_off' : 'visibility'}}</mat-icon>
                </button>
                <mat-error *ngIf="confirmPasswordRef.invalid && f.submitted">Conferma password richiesta</mat-error>
              </mat-form-field>

              <mat-card-actions>
                  <div>
                      <!--<button type="submit" mat-flat-button color="primary" [disabled]="f.invalid || differentPassword(passwordRef.value,confirmPasswordRef.value)" style="width : 100%">Registrati</button>-->
                      <button type="submit" mat-flat-button color="primary" style="width : 100%">Registrati</button>
                  </div>
              </mat-card-actions>
        </form>
        <!--
        <div>
          <button mat-button color="primary" (click)="hideMe()">Hai già un account? Accedi</button>
        </div>
        -->




<!-- /div -->
  `,
  styles: [`
    mat-form-field {
      width: 100%;
    }
    mat-flat-button{
      width: 100%;
    }
  `]
})
export class RegisterComponent implements OnInit {
  @Input() visualizza: boolean = true;
  @Output() registerVisible = new EventEmitter<boolean>();
  @Output() componentName = new EventEmitter<string>();
  passwordHide: boolean = true;
  confirmPasswordHide: boolean = true;


  constructor() { }

  ngOnInit(): void {
  }

  RegisterHandler(form: any) {
    if (form.valid){
      console.log('hai eseguito la registrazione :', form.value)
    }
      else
    {
      console.log('Errore : form di registrazione non valido')
    }
  }

  hideMe() {
    console.log('register status:' + this.visualizza);
    //this.registerVisible.emit(true);
    this.componentName.emit("register")
  }

  checkField(input: NgModel) {
    //    console.log('Input:' + input);
    return { 'is-invalid': input.invalid, 'is-valid': input.valid }
  }

  differentPassword(mRegPassword : string, mRegconfirmPassword : string){
    console.log('Password uguali? :'+ mRegPassword === mRegconfirmPassword  );
    if (mRegPassword !=='' && mRegPassword === mRegconfirmPassword) {
      return false;
    }
    return true;
  }


}
