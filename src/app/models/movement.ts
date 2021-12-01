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
    ,"description":"01 Fattura per consulenza"
    ,"cardId":'86e724fd-d3eb-480d-8a4a-20fc4d22e694'
    ,"timestamp":Date.now()
  }  ,
  {
      "_id":"2a"
      ,"type":"out"
      ,"amount":600
      ,"title":"YouTube - Pagamento mensile"
      ,"description":"02 Questo mese hai accumulato 752.340 views sul tuo canale!"
      ,"cardId":'9d4d33f1-8a2f-43da-aa80-696fcfe3b717'
      ,"timestamp":Date.now()
    }  ,
    {
      "_id":"3a"
      ,"type":"in"
      ,"amount":645
      ,"title":"Stipendio mensile"
      ,"description":"03 Stipendio mensile"
      ,"cardId":'86e724fd-d3eb-480d-8a4a-20fc4d22e694'
      ,"timestamp":Date.now()
    },
    {
        "_id":"4a"
      ,"type":"out"
      ,"amount":645
      ,"title":"NetFlix - Pagamento mensile"
      ,"description":"04 hai guardato 5 film questo mese"
      ,"cardId":'9d4d33f1-8a2f-43da-aa80-696fcfe3b717'
      ,"timestamp":Date.now()
    },
    {
      "_id":"5a"
    ,"type":"out"
    ,"amount":645
    ,"title":"NetFlix - Pagamento mensile"
    ,"description":"05 hai guardato 5 film questo mese"
    ,"cardId":'9d4d33f1-8a2f-43da-aa80-696fcfe3b717'
    ,"timestamp":Date.now()
  },
  {
    "_id":"6a"
    ,"type":"in"
    ,"amount":645
    ,"title":"Stipendio mensile"
    ,"description":"06 Stipendio mensile"
    ,"cardId":'86e724fd-d3eb-480d-8a4a-20fc4d22e694'
    ,"timestamp":Date.now()
  },
  {
    "_id":"7a"
    ,"type":"in"
    ,"amount":645
    ,"title":"Stipendio mensile"
    ,"description":"07 Stipendio mensile"
    ,"cardId":'8254c962-c97e-49eb-9290-80405735fbff'
    ,"timestamp":Date.now()
  },
  {
    "_id":"8a"
    ,"type":"in"
    ,"amount":645
    ,"title":"Stipendio mensile"
    ,"description":"08 Stipendio mensile"
    ,"cardId":'86e724fd-d3eb-480d-8a4a-20fc4d22e694'
    ,"timestamp":Date.now()
  },
  {
    "_id":"9a"
    ,"type":"out"
    ,"amount":600
    ,"title":"YouTube - Pagamento mensile"
    ,"description":"09 Questo mese hai accumulato 752.340 views sul tuo canale!"
    ,"cardId":'8254c962-c97e-49eb-9290-80405735fbff'
    ,"timestamp":Date.now()
  }  ,
  {
    "_id":"10a"
    ,"type":"out"
    ,"amount":600
    ,"title":"YouTube - Pagamento mensile"
    ,"description":"10 Questo mese hai accumulato 752.340 views sul tuo canale!"
    ,"cardId":'9d4d33f1-8a2f-43da-aa80-696fcfe3b717'
    ,"timestamp":Date.now()
  }  ,
  {
    "_id":"11a"
    ,"type":"in"
    ,"amount":645
    ,"title":"Stipendio mensile"
    ,"description":"11 Stipendio mensile"
    ,"cardId":'8254c962-c97e-49eb-9290-80405735fbff'
    ,"timestamp":Date.now()
  },
  {
    "_id":"12a"
    ,"type":"in"
    ,"amount":645
    ,"title":"Stipendio mensile"
    ,"description":"12 Stipendio mensile"
    ,"cardId":'86e724fd-d3eb-480d-8a4a-20fc4d22e694'
    ,"timestamp":Date.now()
  },
  {
    "_id":"13a"
    ,"type":"out"
    ,"amount":600
    ,"title":"YouTube - Pagamento mensile"
    ,"description":"13 Questo mese hai accumulato 752.340 views sul tuo canale!"
    ,"cardId":'8254c962-c97e-49eb-9290-80405735fbff'
    ,"timestamp":Date.now()
  }  ,
  {
    "_id":"14a"
    ,"type":"out"
    ,"amount":600
    ,"title":"YouTube - Pagamento mensile"
    ,"description":"14 Questo mese hai accumulato 752.340 views sul tuo canale!"
    ,"cardId":'9d4d33f1-8a2f-43da-aa80-696fcfe3b717'
    ,"timestamp":Date.now()
  }  ,
  {
    "_id":"15a"
    ,"type":"in"
    ,"amount":645
    ,"title":"Stipendio mensile"
    ,"description":"15 Stipendio mensile"
    ,"cardId":'8254c962-c97e-49eb-9290-80405735fbff'
    ,"timestamp":Date.now()
  },
  {
    "_id":"16a"
    ,"type":"in"
    ,"amount":645
    ,"title":"Stipendio mensile"
    ,"description":"16 Stipendio mensile"
    ,"cardId":'86e724fd-d3eb-480d-8a4a-20fc4d22e694'
    ,"timestamp":Date.now()
  },
  {
    "_id":"17a"
    ,"type":"out"
    ,"amount":600
    ,"title":"YouTube - Pagamento mensile"
    ,"description":"17 Questo mese hai accumulato 752.340 views sul tuo canale!"
    ,"cardId":'8254c962-c97e-49eb-9290-80405735fbff'
    ,"timestamp":Date.now()
  }  ,
  {
    "_id":"18a"
    ,"type":"out"
    ,"amount":600
    ,"title":"YouTube - Pagamento mensile"
    ,"description":"18 Questo mese hai accumulato 752.340 views sul tuo canale!"
    ,"cardId":'9d4d33f1-8a2f-43da-aa80-696fcfe3b717'
    ,"timestamp":Date.now()
  },
  {
    "_id":"19a"
    ,"type":"in"
    ,"amount":645
    ,"title":"fattura nr. 100"
    ,"description":"19 Fattura per consulenza"
    ,"cardId":'86e724fd-d3eb-480d-8a4a-20fc4d22e694'
    ,"timestamp":Date.now()
  }  ,
  {
      "_id":"20a"
      ,"type":"out"
      ,"amount":600
      ,"title":"YouTube - Pagamento mensile"
      ,"description":"20 Questo mese hai accumulato 752.340 views sul tuo canale!"
      ,"cardId":'9d4d33f1-8a2f-43da-aa80-696fcfe3b717'
      ,"timestamp":Date.now()
    }  ,
    {
      "_id":"21a"
      ,"type":"in"
      ,"amount":645
      ,"title":"Stipendio mensile"
      ,"description":"21 Stipendio mensile"
      ,"cardId":'86e724fd-d3eb-480d-8a4a-20fc4d22e694'
      ,"timestamp":Date.now()
    },
    {
        "_id":"22a"
      ,"type":"out"
      ,"amount":645
      ,"title":"NetFlix - Pagamento mensile"
      ,"description":"22 hai guardato 5 film questo mese"
      ,"cardId":'9d4d33f1-8a2f-43da-aa80-696fcfe3b717'
      ,"timestamp":Date.now()
    },
    {
      "_id":"23a"
    ,"type":"out"
    ,"amount":645
    ,"title":"NetFlix - Pagamento mensile"
    ,"description":"23 hai guardato 5 film questo mese"
    ,"cardId":'9d4d33f1-8a2f-43da-aa80-696fcfe3b717'
    ,"timestamp":Date.now()
  },
  {
    "_id":"24a"
    ,"type":"in"
    ,"amount":645
    ,"title":"Stipendio mensile"
    ,"description":"24 Stipendio mensile"
    ,"cardId":'86e724fd-d3eb-480d-8a4a-20fc4d22e694'
    ,"timestamp":Date.now()
  },
  {
    "_id":"25a"
    ,"type":"in"
    ,"amount":645
    ,"title":"Stipendio mensile"
    ,"description":"25 Stipendio mensile"
    ,"cardId":'8254c962-c97e-49eb-9290-80405735fbff'
    ,"timestamp":Date.now()
  },
  {
    "_id":"26a"
    ,"type":"in"
    ,"amount":645
    ,"title":"Stipendio mensile"
    ,"description":"26 Stipendio mensile"
    ,"cardId":'86e724fd-d3eb-480d-8a4a-20fc4d22e694'
    ,"timestamp":Date.now()
  },
  {
    "_id":"27a"
    ,"type":"out"
    ,"amount":600
    ,"title":"YouTube - Pagamento mensile"
    ,"description":"27 Questo mese hai accumulato 752.340 views sul tuo canale!"
    ,"cardId":'8254c962-c97e-49eb-9290-80405735fbff'
    ,"timestamp":Date.now()
  }  ,
];
