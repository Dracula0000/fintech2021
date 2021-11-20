import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Card } from './models/card';



@Component({
  selector: 'ac-root',
  template: `
    <!--
    <ac-login-component></ac-login-component>
    -->
    <ac-cards-component></ac-cards-component>

    <router-outlet></router-outlet>
  `,
  styles: [
  ]
})

export class AppComponent {
  title = 'Fintech';

  getCard(c : Card) {
    console.log('getCard ',c);
  }

  getCardId(_id : string | null) {
    console.log("getCardId Id ",_id);
  }
  addCard(v : any) {
    console.log("addCard value ",v);
  }

}
