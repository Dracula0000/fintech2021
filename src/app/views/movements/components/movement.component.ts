import { Component,Input } from '@angular/core';


@Component({
  selector: 'ac-movement-component',
  template: `
          <mat-expansion-panel (opened)="panelOpenState = true"
                (closed)="panelOpenState = false" >
          <mat-expansion-panel-header>

            <mat-panel-title >
              <div class="amount" >
                <i style="color : grey" >
                  <small>
                    [{{data  | date:'dd/MM/YYYY'}}]
                  </small>
                </i>
              </div>
              <div
                [ngClass]="{'colorGreen' : movType ==='in' , 'colorRed' : movType ==='out'}"
                class="amount" >
                    {{amount}}
              </div>
              <!--<div [style.color]="movType === 'in' ? 'green' : 'red'">-->
                <!--</div>-->
              <div style="width : 300px" >
                    {{title}}
              </div>

            </mat-panel-title>

            <mat-panel-description >
                  <!--    -->
                  {{SubstringDescription}}
                <!-- TODO NON SI RIESCE AD USARE IL PIPE -->
                 <!-- {{description | truncate:20}}-->

            </mat-panel-description>
          </mat-expansion-panel-header>
          {{description}}
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
    .colorRed{
        color : red;
    }
    .colorGreen{
        color : green;
        position : left;
    }
    .flex-container {
      justify-content: space-between;
      align-items: right;
    }
    .amount {
      padding-right : 50px;

    }

  `]
})



export class MovementComponent  {

  @Input() data : number | null = null; //La data (in formato stringa, esattamente come la stai vedendo)
  @Input() amount :  number = 0 //L’ammontare del movimento
  @Input() movType : 'in' | 'out' = 'in' //Il tipo di movimento (“type” nel modello): a seconda del suo valore, bisogna mostrare l’ammontare in rosso oppure in verde!
  @Input() title :  string = '' //Il titolo (nell’immagine “Lorem Ipsum“)
  @Input() description : string = 'lorme ipsuin bla bla bla bla bla bla bla bla' //La descrizione (nell’immagine “Lorem ipsum dolor sit amet“)



  panelOpenState = false;
  movIn : boolean = true;


  get SubstringDescription(){
    const charNumber : number = 20;
    return this.description.length >charNumber  ? this.description.substring(0,charNumber) + '...' : this.description
     /*
        if (this.description.length >20  ){
          return this.description.substring(0,20) + '...'
        }
        return this.description
    */
  }
}

