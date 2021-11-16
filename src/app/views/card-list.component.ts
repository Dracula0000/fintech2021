import { Component, OnInit, OnChanges } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Card } from '../models/card';



@Component({
  selector: 'ac-cardList-component',
  template: `
  `,
  styles: []
})
export class CardListComponent  {

  cards : Card[] = [
    {"_id":"86e724fd-d3eb-480d-8a4a-20fc4d22e694"    
        ,"number":"0000 0000 0000 0000"        
        ,"ownerId":"et45er5e6fba"        
        ,"owner":"Mario Rossi"        
        ,"type":"visa"
        ,"amount":15000
    }        
    ,{"_id":"9d4d33f1-8a2f-43da-aa80-696fcfe3b717"
        ,"number":"1111 1111 1111 1111"
        ,"ownerId":"et45er5e6fba"
        ,"owner":"Mario Rossi"
        ,"type":"mastercard"
        ,"amount":500}
    ,{"_id":"8254c962-c97e-49eb-9290-80405735fbff"
        ,"number":"2222 2222 2222 2222"
        ,"ownerId":"et45er5e6fba"
        ,"owner":"Mario Rossi"
        ,"type":"visa"
        ,"amount":250000}]
  
 
  
}
