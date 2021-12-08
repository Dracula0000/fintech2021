import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgModel } from '@angular/forms';



@Component({
  selector: 'ac-sign-in-component',
  template: `
  <!-- Login -->
  <!-- div *ngIf="visualizza" -->
      <form #f="ngForm" (submit)="loginHandler(f)">
              <mat-form-field appearance="fill">
                <mat-icon matPrefix>account_circle</mat-icon>
                <mat-label>Email</mat-label>
                  <input matInput
                    type="email"
                    placeholder="you@example.com"
                    ngModel name="lemail"
                    required email
                    #lemailRef="ngModel"
                    [ngClass]="checkField(lemailRef)"
                    >
                <mat-error *ngIf="lemailRef.invalid && f.submitted">email richiesta</mat-error>
              </mat-form-field>

              <mat-form-field appearance="fill">
                <mat-icon matPrefix>https</mat-icon>
                <mat-label>Password</mat-label>
                  <input matInput [type]="passwordHide ? 'password' : 'text'"
                  required
                  ngModel name="lPassword"
                  #lPasswordRef="ngModel"
                  [ngClass]="checkField(lPasswordRef)"
                >
                  <button mat-icon-button matSuffix (click)="passwordHide = !passwordHide" [attr.aria-label]="'Hide password'" [attr.aria-pressed]="passwordHide">
                    <mat-icon>{{passwordHide ? 'visibility_off' : 'visibility'}}</mat-icon>
                  </button>
                  <mat-error *ngIf="lPasswordRef.invalid && f.submitted">Password richiesta</mat-error>
              </mat-form-field>
              <mat-card-actions>
                <div>
                  <!--<button type="submit" mat-flat-button color="primary" [disabled]="f.invalid" style="width : 100%">Accedi</button>-->
                  <button type="submit" mat-flat-button color="primary"  style="width : 100%">Accedi</button>
                </div>
              </mat-card-actions>
      </form>
      <ng-container></ng-container>
      <!--
      <div>
        <button mat-button color="primary" (click)="showMe()">Crea un nuovo account</button>
      </div>
      -->
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
export class SignInComponent implements OnInit {
  @Input() visualizza: boolean = true
  //@Output() signinVisible = new EventEmitter<boolean>();
  @Output() componentName = new EventEmitter<string>();
  passwordHide: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  loginHandler(form: any) {
    if (form.valid){
      console.log('hai eseguito l\'accesso :', form.value)
    }
      else
    {
      console.log('Errore : form di login non valido')
    }
  }

  showMe() {
    console.log('sigin status: ' + this.visualizza);
    //this.signinVisible.emit(false)
    this.componentName.emit("sign-in")
  }

  checkField(input: NgModel) {
    return { 'is-invalid': input.invalid, 'is-valid': input.valid }
  }

}
