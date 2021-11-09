import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MaterialModule } from '../shared/material/material.module';
import { NgForm, NgModel } from '@angular/forms';

/*
controlla che i valori dei due campi coincidano! Segnati per comodità un TODO, questo sarà il caso in cui scriveremo un validatore custom.
*/

@Component({
  selector: 'ac-register-component',
  template: `
  <!-- Registrati -->
  <!-- div *ngIf="visualizza" -->
      
      <mat-card class="Register" >
        <form #f="ngForm" (submit)="RegisterHandler(f)">  
            <mat-card-title>Registrati</mat-card-title>
              <mat-card-subtitle>     

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
              </mat-card-subtitle>
              <mat-card-actions>
                  <div>
                      <button type="submit" mat-flat-button color="primary" [disabled]="f.invalid">Registrati</button>
                  </div>          
              </mat-card-actions>
            </form>
          <div>
            <button mat-button color="primary" (click)="hideMe()">Hai già un account? Accedi</button>                  
          </div>  
      </mat-card>

    

<!-- /div -->
  `,
  styles: [`
  .Register{
        width: 300px;        
        margin: 100px auto;
  }
    `
  ]
})
export class RegisterComponent implements OnInit {
  @Input() visualizza: boolean = true;
  @Output() registerVisible = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  RegisterHandler(form: any) {
    console.log('Hai eseguito la Registrazione')
  }

  hideMe() {
    console.log('register status:' + this.visualizza);    
    this.registerVisible.emit(true)
  }

  checkField(input: NgModel) {
    return { 'is-invalid': input.invalid, 'is-valid': input.valid }
  }


}
