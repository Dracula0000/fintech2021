import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';




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



}
