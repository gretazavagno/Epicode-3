"use strict";
/*Scrivere un programma usando la programmazione a oggetti che calcola le tasse che dovranno sostenere i singoli lavoratori autonomi al fine di verificare il reddito annuo netto di ognuno a secondo del proprio reddito annuo lordo, tasse, cod redditività.
Il programma utilizza classi astratte e non astratte.
Dati:
    Proprietà:
        codredd: number
        redditoannuolordo: number
        tasseinps:number
        tasseirpef:number
    
    metodi:
        getUtileTasse:number
        getTasseInps:number
        getTasseIrpef:number
        getRedditoAnnuoNetto:number	*/
class LavoratoreAutonomo {
    constructor(codredd, redditoannuolordo, tasseinps, tasseirpef) {
        this.codredd = codredd;
        this.redditoannuolordo = redditoannuolordo;
        this.tasseinps = tasseinps;
        this.tasseirpef = tasseirpef;
    }
}
class LavoratoreAutonomoImpl extends LavoratoreAutonomo {
    getUtileTasse() {
        return this.redditoannuolordo - this.getTasseInps() - this.getTasseIrpef();
    }
    getTasseInps() {
        return (this.redditoannuolordo * this.tasseinps) / 100;
    }
    getTasseIrpef() {
        return (this.redditoannuolordo * this.tasseirpef) / 100;
    }
    getRedditoAnnuoNetto() {
        return this.redditoannuolordo - this.getTasseInps() - this.getTasseIrpef();
    }
}
// Esempio di utilizzo delle classi per calcolare il reddito annuo netto di un lavoratore autonomo
// Creazione di un'istanza del lavoratore autonomo
const lavoratore = new LavoratoreAutonomoImpl(123, 50000, 25, 20);
// Calcolo delle tasse e del reddito annuo netto
const utileTasse = lavoratore.getUtileTasse();
const tasseInps = lavoratore.getTasseInps();
const tasseIrpef = lavoratore.getTasseIrpef();
const redditoAnnuoNetto = lavoratore.getRedditoAnnuoNetto();
// Stampa dei risultati
console.log(`Utile tasse: ${utileTasse}`);
console.log(`Tasse INPS: ${tasseInps}`);
console.log(`Tasse IRPEF: ${tasseIrpef}`);
console.log(`Reddito annuo netto: ${redditoAnnuoNetto}`);
