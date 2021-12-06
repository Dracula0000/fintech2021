import { Movement, MovementsExamples } from './../../models/movement';
import { Component, Input} from '@angular/core';
import { Card ,CardsListExample} from '../../models/card';


@Component({
  selector: 'ac-movements-component',
  template: `
          <!--{{movements | json}}-->
          <mat-card class="movements-list" >

            <mat-card-title>
              <div>
                Movimenti
              </div>
              <div>
                <h3>
                    <mat-form-field appearance="fill">
                      <mat-label>seleziona una carta</mat-label>
                      <mat-select>
                      <mat-option
                            [value]=''
                            (click)="setCardID('')">
                            - selelezionare -
                        </mat-option>
                        <mat-option
                            *ngFor="let card of cards"
                            [value]="card._id"
                            (click)="setCardID(card._id)">
                          {{card.number}}
                        </mat-option>
                      </mat-select>
                    </mat-form-field>
                </h3>
              </div>
              <div>
                Saldo: € {{CalcolaTotali()}}
              </div>
              </mat-card-title>
                  <mat-card-subtitle>

                      <ac-movement-component *ngFor="let mov of FilterMovements"
                      [data]="mov.timestamp"
                      [amount]="mov.amount"
                      [movType]="mov.type"
                      [title]="mov.title"
                      [description]="mov.description"                                        >
                      </ac-movement-component>
                      <mat-card-actions>
                          <div>
                            <button type="button"
                              *ngIf="visualizzaCaricaAltro()"
                              mat-raised-button
                              style="width:99%; margin: 5px"
                              (click)="caricaAltro()">Carica altro
                            </button>
                          </div>
                      </mat-card-actions>
                  </mat-card-subtitle>

            </mat-card>



          <!-- Elenco -->


  `,
  styles: [`
    .movements-list{
      width: 95%;
      margin: 2px auto;

    }
    .mat-form-field {
      width: 300px;
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

export class MovementsComponent  {
  //nr. righe visualizzate per volta
    @Input() pageSize :  number = 5;
    //TODO: verificare perchè la prima volta imposta questo valore invece del valore passato come  parametro

    cards : Card[] = CardsListExample;
    mMovements : Movement[] = MovementsExamples;
    currentPage: number = 1;
    //pageSize : number = 5;
    card_id : string ='';
    FilterMovements: Movement[] = this.getFilterMovements( this.card_id);
    //utilizzo array temporaneo per avere sempre un array da passare nello ngFor


    setCardID(v : string){
     // e.stopPropagation;
      this.card_id = v;
      this.currentPage = 1;
      this.getFilterMovements( this.card_id)
      this.CalcolaTotali()
      this.visualizzaCaricaAltro()
    }

    caricaAltro(){
      this.currentPage = this.currentPage + 1;
      this.FilterMovements = this.getFilterMovements(this.card_id);
      this.CalcolaTotali()
      this.visualizzaCaricaAltro()
    }

    visualizzaCaricaAltro(){
      //console.log('array lenght , page ',this.FilterMovements.length,(this.currentPage )* this.pageSize);
      if (this.FilterMovements.length >= ((this.currentPage )* this.pageSize)) {
        return  true;
      }
      return false;
    }

    getFilterMovements( card_id : string): Movement[] {
      console.log ('PageSize: ',this.pageSize)
      if(card_id !=='') {
        this.FilterMovements = this.mMovements.filter(x => x.cardId === card_id).slice(0, this.currentPage * this.pageSize);
        this.CalcolaTotali()

        this.visualizzaCaricaAltro
        return this.FilterMovements
      }
      //console.log ('no CardId: ', card_id);
      this.FilterMovements = this.mMovements;
      this.CalcolaTotali()

      this.visualizzaCaricaAltro
      return this.FilterMovements.slice(0, this.currentPage * this.pageSize);
    }

    CalcolaTotali(){
      return  this.FilterMovements.reduce(function(amount, curr){
        if (curr.type==='in'){
          return amount + curr.amount;
        }
         return amount - curr.amount;
        },0)

    }





}
