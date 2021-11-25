import { Component, OnInit, OnChanges, EventEmitter, Output, Input } from '@angular/core';
import { Card ,CardsListExample,cardTypes} from '../models/card';
import { CardForm} from '../models/card-form';

import { FormBuilder,FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'ac-cardList-component',
  template: `


          <!--{{cards | json}}-->
          <!-- Elenco -->

          <mat-card class="card-list" >

            <mat-card-title>
              Carte<br />
            </mat-card-title>

            <mat-card-subtitle>

                <mat-list>
                  <mat-list-item *ngFor="let card of cards">
                    <!-- TODO Posizionare all'inizio -->


                      <h3 matLine>
                        <span class="material-icons" >
                            credit_card
                          </span>
                      {{card.number}} </h3>
                      <p matLine>
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&euro;<b>{{card.amount | number:'1.2-2'}}</b> </span>
                        <span class=""> - {{card.type}} </span>
                      </p>

                    <mat-action-list>
                      <div class="material-icons" (click)="selectedCard.emit(card)"  matTooltip="Vedi movimenti">
                        description
                      </div>
                      <div class="material-icons" (click)="delCardId.emit(card._id)"  matTooltip="Rimuovi">
                        delete
                      </div>
                    </mat-action-list>


                  </mat-list-item>
                </mat-list>

                <mat-card-actions>
                  <div>
                    <button type="button" mat-raised-button style="width:99%; margin: 5px" (click)="addNewCard()">Aggiungi</button>
                  </div>
              </mat-card-actions>
            </mat-card-subtitle>
          </mat-card>
  `,
  styles: [`
    .card-list{
      width: 95%;
      margin: 2px auto;

    }
    .mat-form-field {
      width: 100%;
    }

    .mat-form-field.halfsize {
      width: 49% ;
    }
    .mat-form-field.right {
      margin-left: 10px;
      width: 49% ;
    }

    .twocontrol{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }

    .mat-raised-button {
      width: 100%;

    }
    .mat-stroked-button {
      width: 100%;
    }
    /*
    .mat-icon {
      display: inline-flex;
      vertical-align: middle;
    }
    */
  `]
})
export class CardListComponent  {
  @Input() cards : Card[]= [] ;
  @Output() selectedCard = new EventEmitter<Card>()
  @Output() cardId =new EventEmitter<string | null >()
  @Output() delCardId =new EventEmitter<string | null >()
  @Output() addCard = new EventEmitter<boolean>()

  mCardTypes  = cardTypes ;



  //cards : Card[] = CardsListExample;

  constructor(private fb : FormBuilder) {}

 mCardForm = this.fb.group({
    type : this.fb.control('', Validators.required),
    name : this.fb.control('', Validators.required),
    surname : this.fb.control('', Validators.required),
    cardNumber : this.fb.control('', [Validators.required,Validators.minLength(16),Validators.maxLength(16)] ),
    secureCode  : this.fb.control('', [Validators.required,Validators.minLength(3),Validators.maxLength(3)])
  });

        saveHandler(fg : FormGroup){
          console.log(fg)
        }

        addNewCard(){
            this.addCard.emit(true);
            //console.log("Aggiungi nuova card:" )

        }


      }
