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
  {"_id":"1a"
    ,"type":"in"
    ,"amount":645
    ,"title":"YouTube - Pagamento mensile"
    ,"description":"Questo mese hai accumulato 752.340 views sul tuo canale!"
    ,"cardId":''
    ,"timestamp":Date.now()
  }  ,
  {"_id":"2a"
  ,"type":"out"
  ,"amount":600
  ,"title":"YouTube - Pagamento mensile"
  ,"description":"Questo mese hai accumulato 752.340 views sul tuo canale!"
  ,"cardId":''
  ,"timestamp":Date.now()
    }  ,
    {"_id":"3a"
    ,"type":"in"
    ,"amount":645
    ,"title":"YouTube - Pagamento mensile"
    ,"description":"Questo mese hai accumulato 752.340 views sul tuo canale!"
    ,"cardId":''
    ,"timestamp":Date.now()
    }
];

/*
,
  {
    _id" :  "3b",
    type" :  "out",
    amount" :  410,
    title" :  "Amazon - Pagamento ordine #1234",
    description" :  "Descrizione articolo" :  "Ciabatte comodissime".",
    timestamp" :  Date.now(),
  },
  {
    _id" :  "4a",
    type" :  "in",
    amount" :  100,
    title" :  "Regalo di compleanno",
    description" :  "Tanti auguri da zia Francesca!!",
    timestamp" :  Date.now(),
  },
  {
    _id" :  "5a",
    type" :  "out",
    amount" :  500,
    title" :  "Pernottamento in Hotel",
    description" :  "Hai pernottato 4 giorni all\"Hotel 4 stelle "La Fiorentina", Firenze.",
    timestamp" :  Date.now(),
  },
  {
    _id" :  "6a",
    type" :  "in",
    amount" :  150,
    title" :  "Regalo di compleanno",
    description" :  "Buon compleanno!",
    timestamp" :  Date.now(),
  },
  {
    _id" :  "7a",
    type" :  "out",
    amount" :  390,
    title" :  "Bolletta mensile - luce e gas",
    description" :  "Questo mese hai speso 280€ di gas e 110€ di luce.",
    timestamp" :  Date.now(),
  },
  {
    _id" :  "8a",
    type" :  "in",
    amount" :  500,
    title" :  "Quattordicesima",
    description" :  "Quattordicesima 2021.",
    timestamp" :  Date.now(),
  },
  {
    _id" :  "9a",
    type" :  "out",
    amount" :  495,
    title" :  "Abbonamento annuale calcio e sport",
    description" :  "Essendo nostro cliente da 14 anni, le abbiamo riservato 5€ di sconto.",
    timestamp" :  Date.now(),
  },
  {
    _id" :  "10a",
    type" :  "in",
    amount" :  500,
    title" :  "Regalo di compleanno",
    description" :  "Tanti auguri dal parente sicuramente più simpatico!",
    timestamp" :  Date.now(),
  },
  {
    _id" :  "11a",
    type" :  "out",
    amount" :  500,
    title" :  "Cena - Villa Crespi, degustazione",
    description" :  "La aspettiamo con ansia anche l\"anno prossimo.",
    timestamp" :  Date.now(),
  }
  */
