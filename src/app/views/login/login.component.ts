import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ac-login-component',
  template: `

            <!-- login works -->
            <mat-card class="card300" >
              <mat-card-title>{{msiginVisible ? 'Login' : 'Registrazione'}}</mat-card-title>
                <mat-card-subtitle>
                  <ac-sign-in-component *ngIf="msiginVisible"
                      (componentName) = toggle($event)>
                  >
                  </ac-sign-in-component>
                  <div  *ngIf="msiginVisible">
                    <button mat-button color="primary" (click)="msiginVisible =!msiginVisible">Crea un nuovo account</button>
                  </div>
                  <ac-register-component *ngIf="!msiginVisible"
                      (componentName) = toggle($event)>
                  >
                  </ac-register-component>
                  <div  *ngIf="!msiginVisible" >
                    <button mat-button color="primary" (click)="msiginVisible =!msiginVisible">Hai già un account? Accedi</button>
                  </div>
                </mat-card-subtitle>
            </mat-card>
  `,
  styles: [`
    .card300{
      width: 300px;
      margin: 100px auto;
    }
    mat-form-field {
      width: 100%;
    }
    mat-flat-button{
      width: 100%;
    }
  `]
})
export class LoginComponent implements OnInit {
  msiginVisible: boolean = true;
  //mregisterVisible: boolean =false;
  componentName: string ="sign-in"

  constructor() { }

  ngOnInit(): void {
    //console.log('Init msiginVisible ' +this.msiginVisible);
    //  console.log('Init mregisterVisible ' +this.mregisterVisible);
  }


  OnChanges() {
    //  console.log('msiginVisible ' +this.msiginVisible);
     // console.log('mregisterVisible ' +this.mregisterVisible);
  }

  toggle(cn: string) {
    if (cn === 'sign-in') {
      this.msiginVisible=false;
    }
    else {
      this.msiginVisible=true;
    }
    console.log('toggle : Emit ', cn);
  }

}
