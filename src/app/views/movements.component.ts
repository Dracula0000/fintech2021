import { Movement, MovementsExamples } from './../models/movement';

import { Component, OnInit, OnChanges, EventEmitter, Output, Input } from '@angular/core';
import { Card ,CardsListExample,cardTypes} from '../models/card';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';

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
                        <mat-option *ngFor="let card of cards" [value]="card.number">
                          {{card.number}}
                        </mat-option>
                      </mat-select>
                    </mat-form-field>
                </h3>
              </div>
              <div>
                Saldo: €
              </div>
            </mat-card-title>
                <mat-card-subtitle>

                    <ac-movement-component></ac-movement-component>

                    <mat-card-actions>
                        <div>
                          <button type="button" mat-raised-button style="width:99%; margin: 5px" (click)="caricaAltro()">Carica altro</button>
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


    cards : Card[] = CardsListExample;
    mMovements : Movement[] = MovementsExamples;


    caricaAltro(){
      console.log('click carica altro');
    }



}
