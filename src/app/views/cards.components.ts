import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { Component, OnInit, OnChanges, ElementRef } from '@angular/core';
import { CardListComponent } from './card-list.component';
import { CardFormComponent } from './card-form.component';
import { Card ,CardsListExample} from '../models/card';
import { CardForm } from '../models/card-form';
import {MatSnackBar} from '@angular/material/snack-bar';



@Component({
  selector: 'ac-cards-component',
  template: `

  <!-- Creates a layout with a left and right sidenav and implicit content. -->

  <!-- TODO INVERTIRE LA VISUALIZZAZIONE DELLA SIDENAV -->

  <mat-sidenav-container class="container"  >
      <mat-sidenav #sidenav mode="side"
                    [(opened)]="opened"
                    class="sidenav"
                    position="end">
        <ac-cardform-component
          (addCardForm)="handlerAddCardForm($event)"
          (cancelCardForm)="handlerCancelCardForm($event)"
        >
      </ac-cardform-component>

      </mat-sidenav>
      <mat-sidenav-content>
          <ac-cardList-component
                [cards] = "cards"
                (cardMovements)="viewMovimentCard($event)"
                (cardId)="getCardId($event)"
                (addCard)="addCard($event)"
                (delCardId)="deleteCardId($event)"
            >
          </ac-cardList-component>
      </mat-sidenav-content>
  </mat-sidenav-container>

  `,
  styles: [`
      .container {
        width: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
      }

      .events {
        /*width: 300px;
        height: 200px;*/
        overflow: auto;
        border: 1px solid #555;
      }

  `]
})
export class CardsComponent  {
  //@ViewChild(CardFormComponent) CardFormEl!: ElementRef<CardFormComponent>;

  constructor(private _snackBar: MatSnackBar) {}

    events: string[] = [];
    opened: boolean = false;

    cards : Card[] = CardsListExample;

    openSnackBar(message: string, action: string) {
      this._snackBar.open(message,action);
    }

    /*
    snackbar.open('Message archived', 'Undo', {
      duration: 3000
    });
    */

    getCard(c : Card) {
      console.log('getCard ',c);
    }

    getCardId(_id : string | null) {
      console.log("getCardId Id ",_id);
    }

    addCard(v : boolean) {
      this.opened = v;
      //console.log("addCard value ",v);
    }

    viewMovimentCard(c: Card){
      console.log('credit card movements',c);
    }

  deleteCardId(_id : string | null){

    if (_id !== null){

      this.cards=this.cards.filter( x => x._id !== _id);
      this.openSnackBar(`Carta: ${ _id } eliminata `, "Chiudi")
    }
  }

  handlerCancelCardForm (v : boolean) {
    this.opened = !v;
    //console.log("addCard value ",v);
  }


     newId  () :  string  {
              return ''
     }


  handlerAddCardForm(v: CardForm){
    /* */
      this.opened = !this.opened;

      this.cards = [...this.cards, {_id : ''
            , number : v.cardNumber
            , ownerId : ''
            , owner : `${v.name} ${v.surname}`
            , type: v.type
            , amount : 0 }];

            this.openSnackBar(`Carta: ${v.cardNumber} aggiunta`, "Chiudi")

      //console.log('Fatto', this.cards);
  }




}
