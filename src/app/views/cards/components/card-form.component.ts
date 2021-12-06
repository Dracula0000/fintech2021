import { Component, OnInit, OnChanges, EventEmitter, Output, ViewChild } from '@angular/core';
import { cardTypes} from '../../../models/card';
import { CardForm } from './../../../models/card-form';
import { FormBuilder,  Validators } from '@angular/forms';


@Component({
  selector: 'ac-cardform-component',
  template: `
          <!--{{cards | json}}-->

          <!-- form dettaglio -->
          <br />
          <mat-card class="card-form" >

            <mat-card-title>
              Aggiungi carta<br />
            </mat-card-title>

            <mat-card-subtitle>

                  <form [formGroup]="mCardForm" #form>
                    <div>
                      <mat-form-field appearance="fill">
                        <mat-label>Tipo di carta</mat-label>
                        <mat-select formControlName="type">
                          <mat-option></mat-option>
                          <mat-option *ngFor="let v of mCardTypes"
                            [value]="v"
                          >{{v | uppercase}}</mat-option>
                        </mat-select>
                      </mat-form-field>
                    </div>
                    <div class="twocontrol">
                      <mat-form-field appearance="fill" class="halfsize">
                        <mat-label>Nome</mat-label>
                        <input matInput type="text" formControlName="name" >
                      </mat-form-field>

                      <mat-form-field appearance="fill" class="halfsize">
                        <mat-label>Cognome</mat-label>
                        <input matInput type="text" formControlName="surname" >
                      </mat-form-field>
                    </div>

                    <div>
                      <mat-form-field appearance="fill"   >
                        <mat-label>N° Carta</mat-label>
                        <input matInput type="text" formControlName="cardNumber" >
                      </mat-form-field>
                    </div>
                    <div>
                      <mat-form-field appearance="fill"   >
                        <mat-label>Codice di sicurezza </mat-label>
                        <input matInput type="text" formControlName="secureCode" >
                      </mat-form-field>
                    </div>
                    <mat-card-actions>
                      <div>
                        <button type="submit" mat-raised-button color="primary" (click)="checkAddCardForm()">Aggiungi carta</button>
                      </div>
                      <br />
                      <div>
                        <button type="button" mat-stroked-button color="accent" (click)="checkCancelCardForm()">Annulla</button>
                      </div>
                    </mat-card-actions>

                  </form>

                  <!--<p>Form Status: {{ mCardForm.status }}</p>-->

            </mat-card-subtitle>
          </mat-card>

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
export class CardFormComponent  {
  @Output() addCardForm = new EventEmitter<CardForm>()
  @Output() cancelCardForm = new EventEmitter<boolean>()

  //TODO
  //@ViewChild('ilTuoSelettore', { read: ??? }) form!: ???;

  mCardTypes  = cardTypes ;

 mCardForm = this.fb.group({
    type : this.fb.control('', Validators.required),
    name : this.fb.control('', Validators.required),
    surname : this.fb.control('', Validators.required),
    cardNumber : this.fb.control('',
    [Validators.required,
      Validators.minLength(16),
      Validators.maxLength(16)] ),
    secureCode  : this.fb.control('',
    [Validators.required,
      Validators.minLength(3),Validators.maxLength(3)])
  });

  constructor(private fb : FormBuilder) {}

 // @ViewChild('form', {read : NgForm}) formRef! : NgForm;


        cleaup(){
          //svuoto il form
          //this.formRef.reset();

          this.mCardForm.setValue({type : '', name : '', surname : '', cardNumber : '', secureCode : ''});
          this.mCardForm.reset;
          this.mCardForm.markAsUntouched;
        }


        checkAddCardForm(){

          if (this.mCardForm.valid){
            const mcf : CardForm = this.mCardForm.getRawValue();
            //svuoto il form
            this.cleaup();

            console.log('EMIT: ',this.mCardForm.getRawValue());
            this.addCardForm.emit(mcf);
          }
          else {
            console.log("Form invalid for add");
          }

        }

        checkCancelCardForm(){
            //console.log("cancelCardForm.emit");
            this.cancelCardForm.emit(true);
        }



      }
