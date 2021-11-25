import { Movement } from './../models/movement';
import { Component, OnInit, OnChanges, EventEmitter, Output, ViewChild, Input } from '@angular/core';
import { cardTypes} from '../models/card';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';


@Component({
  selector: 'ac-movement-component',
  template: `
          <mat-expansion-panel (opened)="panelOpenState = true"
                (closed)="panelOpenState = false">
          <mat-expansion-panel-header>
            <mat-panel-title>
                  {{data}}
                  {{amount}}
                  {{type}}
                  {{title}}
            </mat-panel-title>
            <mat-panel-description>
              Currently I am {{panelOpenState ? 'open' : 'closed'}}
            </mat-panel-description>
          </mat-expansion-panel-header>
              {{descrizone}}
        </mat-expansion-panel>

  `,
  styles: [`
    .card-form{
      width: 400px;
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
export class MovementComponent  {

  @Input() data : string =''//La data (in formato stringa, esattamente come la stai vedendo)
  @Input() amount :  number = 0 //L’ammontare del movimento
  @Input() type : 'in' | 'out' = 'in' //Il tipo di movimento (“type” nel modello): a seconda del suo valore, bisogna mostrare l’ammontare in rosso oppure in verde!
  @Input() title :  string = '' //Il titolo (nell’immagine “Lorem Ipsum“)
  @Input() descrizone : string = '' //La descrizione (nell’immagine “Lorem ipsum dolor sit amet“)

  panelOpenState = false;
}

