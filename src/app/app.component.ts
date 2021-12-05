import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';




@Component({
  selector: 'ac-root',
  template: `

    <!--
      I moduli commentati sono finiti
       [Fintech] Angular Material e primi componenti
      [Fintech] Componenti – Cards
      [Fintech] Componenti – Movements

    <ac-login-component></ac-login-component>
    <ac-cards-component></ac-cards-component>

    <ac-movements-component
      [pageSize]="5">
    </ac-movements-component>
    -->
    <!-- i moduli sotto sono da finire -->

    <ac-contacts-component></ac-contacts-component>

    <router-outlet></router-outlet>
  `,
  styles: [
  ]
})

export class AppComponent {
  title = 'Fintech';



}
