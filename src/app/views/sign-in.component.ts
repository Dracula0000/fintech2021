import { Component, OnInit, Input, Output , EventEmitter} from '@angular/core';
import { MaterialModule } from '../shared/material/material.module';
import { NgForm, NgModel } from '@angular/forms';


@Component({
  selector: 'ac-sign-in-component',
  template: `
  <!-- Login --> 
  <!-- div *ngIf="visualizza" -->

      <mat-card class="login" >
        <form #f="ngForm" (submit)="loginHandler(f)">
            <mat-card-title>Login</mat-card-title>
            <mat-card-subtitle>             

                      <mat-form-field appearance="fill">                        
                      <mat-label><span class="material-icons">account_circle</span>Email</mat-label>
                        <input matInput
                          type="email"
                          placeholder="you@example.com"
                          ngModel name="lemail"
                          required email
                          #lemailRef="ngModel"
                          [ngClass]="checkField(lemailRef)"
                          >
                      </mat-form-field>
                      <br/>
                  
                      <mat-form-field appearance="fill">
                        <mat-label><span class="material-icons">https</span>Password</mat-label>
                        <input matInput type="password"
                        required
                        ngModel name="lPassword"
                        #lPasswordRef="ngModel"
                        [ngClass]="checkField(lPasswordRef)"
                        >
                      </mat-form-field>
                
              </mat-card-subtitle>
              <mat-card-actions>
                  <div>
                    <button type="submit" mat-flat-button color="primary" [disabled]="f.invalid" style="width : 100%">Accedi</button>
                  </div>
    
              </mat-card-actions>
           </form>
          <div>
            <button mat-button color="primary" (click)="showMe()">Crea un nuovo account</button>                  
          </div>
      </mat-card>

   
  <!-- /div -->
  `,
  styles: [
    `
    .login{
      width: 300px;      
      margin: 100px auto;
    }
    mat-form-field {
      width: 100%;
    } 
    `

  ]
})
export class SignInComponent implements OnInit {
  @Input() visualizza: boolean =true
  @Output() signinVisible = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  loginHandler(form: any) {
    console.log('hai eseguito l\'accesso')
  }

  showMe() {
    console.log('sigin status: ' + this.visualizza );    
    this.signinVisible.emit( false)
  }

  checkField(input: NgModel) {
    return { 'is-invalid': input.invalid, 'is-valid': input.valid }
  }

}
