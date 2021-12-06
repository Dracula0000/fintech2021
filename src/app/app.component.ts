import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';




@Component({
  selector: 'ac-root',
  template: `

    <mat-sidenav-container class="menu-container">
      <mat-sidenav
          mode="side"
          opened
          >
          <mat-toolbar >
            <span>Menù</span>
          </mat-toolbar>
        <mat-action-list>
          <button mat-list-item routerLink="login">
            <mat-icon aria-hidden="false" >home</mat-icon>
            Home
          </button>
          <button mat-list-item routerLink="cards">
            <mat-icon aria-hidden="false" >credit_card</mat-icon>
            Carte
          </button>
          <button mat-list-item  routerLink="movements">
              <mat-icon aria-hidden="false" >receipt_long</mat-icon>
              Movimenti
          </button>
          <button mat-list-item routerLink="transfer">
              <mat-icon aria-hidden="false" >paid</mat-icon>
              Trasferisci
          </button>
          <button mat-list-item routerLink="apointements">
            <mat-icon aria-hidden="false" >event</mat-icon>
              Appuntamenti
          </button>
          <button mat-list-item >
            <mat-icon aria-hidden="false" >summarize</mat-icon>
            Tasse
          </button>
          <button mat-list-item routerLink="logout">
            <mat-icon aria-hidden="false" >person</mat-icon>
            Mario Rossi<br>Logout
          </button>
        </mat-action-list>
      </mat-sidenav>
      <mat-sidenav-content>
          <mat-toolbar color="primary">
            <span>NgFintech</span>
          </mat-toolbar>
            <router-outlet></router-outlet>
          <!--<ac-login-component></ac-login-component>-->
          <!--
            <ac-cards-component></ac-cards-component>-->
          <!--
            <ac-movements-component
              [pageSize]="5">
            </ac-movements-component>
          -->
      </mat-sidenav-content>

    </mat-sidenav-container>

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
    <!--
      <ac-contacts-component></ac-contacts-component>
    -->



  `,
  styles: [`
  .menu-container {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: #eee;
  }
  .mat-icon {
    padding: 0 1rem 0 0;

  }
  .menu{
    padding: 20px  ;
    bgcolor:gray;
  }
`
  ]
})

export class AppComponent {
  title = 'Fintech';



}
