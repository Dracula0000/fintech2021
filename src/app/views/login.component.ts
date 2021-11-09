import { Component, OnInit, OnChanges } from '@angular/core';
import { NgModel } from '@angular/forms';
import { SignInComponent } from './sign-in.component';

@Component({
  selector: 'ac-login-component',
  template: `
            <!-- login works -->

            
              <ac-sign-in-component *ngIf="msiginVisible" (signinVisible) = toggle($event)></ac-sign-in-component> 
              <ac-register-component *ngIf="!msiginVisible" (registerVisible) = toggle($event)></ac-register-component>
            

  `,
  styles: []
})
export class LoginComponent implements OnInit {
  msiginVisible: boolean = true;
  mregisterVisible: boolean =false;


  constructor() { }

  ngOnInit(): void {
    //console.log('Init msiginVisible ' +this.msiginVisible);
    //  console.log('Init mregisterVisible ' +this.mregisterVisible);
  }


  OnChanges() {
    //  console.log('msiginVisible ' +this.msiginVisible);
     // console.log('mregisterVisible ' +this.mregisterVisible);
  }



  toggle(status: any) {
   // console.log('Emit ' +status);
    this.msiginVisible=status;
  }
}
