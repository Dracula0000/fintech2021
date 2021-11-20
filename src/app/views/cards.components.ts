import { Component, OnInit, OnChanges } from '@angular/core';
import { CardListComponent } from './card-list.component';
import { CardFormComponent } from './card-form.component';
import { Card } from '../models/card';


@Component({
  selector: 'ac-cards-component',
  template: `

  <!-- Creates a layout with a left and right sidenav and implicit content. -->
  card component works
      <mat-sidenav-container>
        <mat-sidenav>Start
        <!--
          <ac-cardList-component
              (selectedCard)="getCard($event)"
              (cardId)="getCardId($event)"
              (addCard)="addCard($event)"
          >
          </ac-cardList-component>
-->
        </mat-sidenav>
        <mat-sidenav position="end">End
          <!--
            <ac-cardform-component>
          </ac-cardform-component>
-->
        </mat-sidenav>
        <section>Main</section>
      </mat-sidenav-container>

  `,
  styles: [`

  `]
})
export class CardsComponent  {


  //TODO
  //@ViewChild('ilTuoSelettore', { read: ??? }) form!: ???;


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
