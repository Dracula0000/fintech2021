import { Component, OnInit, OnChanges, EventEmitter, Output, Input } from '@angular/core';
import { Card ,CardsListExample,cardTypes} from '../models/card';
import { CardForm} from '../models/card-form';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'ac-contactList-component',
  template: `
           Contacs List - works!
             <br>
             TODO: da implementare

             <!--
               <mat-list-item *ngFor="let contact of contacts | filter:???">
              -->


  `,
  styles: []
})
export class ContactListComponent  {
 }
