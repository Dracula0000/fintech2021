export interface Movement {
  _id :  string;
  type :  'in' | 'out';
  amount :  number;
  title :  string;
  description :  string;
  cardId :  string;
  timestamp :  number;
}


export const MovementsExamples : Movement[] = [
  {
    "_id":"1a"
    ,"type":"in"
    ,"amount":645
    ,"title":"fattura nr. 100"
    ,"description":"Fattura per consulenza"
    ,"cardId":'86e724fd-d3eb-480d-8a4a-20fc4d22e694'
    ,"timestamp":Date.now()
  }  ,
  {
      "_id":"2a"
      ,"type":"out"
      ,"amount":600
      ,"title":"YouTube - Pagamento mensile"
      ,"description":"Questo mese hai accumulato 752.340 views sul tuo canale!"
      ,"cardId":'9d4d33f1-8a2f-43da-aa80-696fcfe3b717'
      ,"timestamp":Date.now()
    }  ,
    {
      "_id":"3a"
      ,"type":"in"
      ,"amount":645
      ,"title":"Stipendio mensile"
      ,"description":"Stipendio mensile"
      ,"cardId":'86e724fd-d3eb-480d-8a4a-20fc4d22e694'
      ,"timestamp":Date.now()
    },
    {
        "_id":"4a"
      ,"type":"out"
      ,"amount":645
      ,"title":"NetFlix - Pagamento mensile"
      ,"description":"hai guardato 5 film questo mese"
      ,"cardId":'9d4d33f1-8a2f-43da-aa80-696fcfe3b717'
      ,"timestamp":Date.now()
    },
    {
      "_id":"5a"
    ,"type":"out"
    ,"amount":645
    ,"title":"NetFlix - Pagamento mensile"
    ,"description":"hai guardato 5 film questo mese"
    ,"cardId":'9d4d33f1-8a2f-43da-aa80-696fcfe3b717'
    ,"timestamp":Date.now()
  },
  {
    "_id":"6a"
    ,"type":"in"
    ,"amount":645
    ,"title":"Stipendio mensile"
    ,"description":"Stipendio mensile"
    ,"cardId":'86e724fd-d3eb-480d-8a4a-20fc4d22e694'
    ,"timestamp":Date.now()
  },
  {
    "_id":"7a"
    ,"type":"in"
    ,"amount":645
    ,"title":"Stipendio mensile"
    ,"description":"Stipendio mensile"
    ,"cardId":'86e724fd-d3eb-480d-8a4a-20fc4d22e694'
    ,"timestamp":Date.now()
  },
  {
    "_id":"8a"
    ,"type":"in"
    ,"amount":645
    ,"title":"Stipendio mensile"
    ,"description":"Stipendio mensile"
    ,"cardId":'86e724fd-d3eb-480d-8a4a-20fc4d22e694'
    ,"timestamp":Date.now()
  },
  {
    "_id":"9a"
    ,"type":"out"
    ,"amount":600
    ,"title":"YouTube - Pagamento mensile"
    ,"description":"Questo mese hai accumulato 752.340 views sul tuo canale!"
    ,"cardId":'9d4d33f1-8a2f-43da-aa80-696fcfe3b717'
    ,"timestamp":Date.now()
  }  ,
  {
    "_id":"10a"
    ,"type":"out"
    ,"amount":600
    ,"title":"YouTube - Pagamento mensile"
    ,"description":"Questo mese hai accumulato 752.340 views sul tuo canale!"
    ,"cardId":'9d4d33f1-8a2f-43da-aa80-696fcfe3b717'
    ,"timestamp":Date.now()
  }  ,
];
