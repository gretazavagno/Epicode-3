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
// classe astratta LiberoProf
class LiberoProf {
    // il costruttore della classe referenzia le proprietà
    constructor(ReddAnnuo, codRett, TasseIrpef, TasseInps) {
        this.ReddAnnuo = ReddAnnuo;
        this.codRett = codRett;
        this.TasseIrpef = TasseIrpef;
        this.TasseInps = TasseInps;
    }
}
// classe astratta Artigiano
class Artigiano {
    // il costruttore della classe referenzia le proprietà
    constructor(ReddAnnuo, codRett, TasseIrpef, TasseInps) {
        this.ReddAnnuo = ReddAnnuo;
        this.codRett = codRett;
        this.TasseIrpef = TasseIrpef;
        this.TasseInps = TasseInps;
    }
}
// classe astratta Commerciante
class Commerciante {
    // il costruttore della classe referenzia le proprietà
    constructor(ReddAnnuo, codRett, TasseIrpef, TasseInps) {
        this.ReddAnnuo = ReddAnnuo;
        this.codRett = codRett;
        this.TasseIrpef = TasseIrpef;
        this.TasseInps = TasseInps;
    }
}
// classe AnnuoNettoProf estende LiberoProf
class AnnuoNettoProf extends LiberoProf {
    //passaggio dei parametri al costruttore
    constructor(ReddAnnuo, codRett, TasseIrpef, TasseInps) {
        // utilizzo del comando super passare come parametro le proprietà della superclasse
        super(ReddAnnuo, codRett, TasseIrpef, TasseInps);
    }
    // implementazione metodo getUtileTasse
    getUtileTasse() {
        return (this.ReddAnnuo * this.codRett) / 100;
    }
    // implementazione metodo getTasseInps
    getTasseInps() {
        return (this.getUtileTasse() * this.TasseInps) / 100;
    }
    // implementazione metodo getTasseIrpef
    getTasseIrpef() {
        return (this.getUtileTasse() * this.TasseIrpef) / 100;
    }
    // implementazione metodo getRedditoAnnuoNetto
    getReddAnnuoNetto() {
        return this.ReddAnnuo - (this.getTasseInps() + this.getTasseIrpef());
    }
}
// set proprietà al costruttore
let reddprof = new AnnuoNettoProf(27500, 78, 5, 25.72);
// chiamo il metodo getUtileTasse
let utiltassprof = reddprof.getUtileTasse();
console.log("\n");
console.log("utile tasse professionista:" + utiltassprof + "€");
// chiamo il metodo getTasseInps
let tassinpsprof = reddprof.getTasseInps();
// chiamo il metodo getTasseIrpef
let tassirpefprof = reddprof.getTasseIrpef();
// chiamo il metodo getRedditoAnnuoNetto
let reddannuoprof = reddprof.getReddAnnuoNetto();
// stampo tutte le istanze
console.log("tasse inps professionista:" + tassinpsprof + "€");
console.log("tasse irpef professionista:" + tassirpefprof + "€");
console.log("reddito annuo netto professionista:" + reddannuoprof + "€");
console.log("-------------------------------------------------");
class AnnuoNettoArt extends Artigiano {
    constructor(RedditoAnnuo, codRett, TasseIrpef, TasseInps) {
        super(RedditoAnnuo, codRett, TasseIrpef, TasseInps);
    }
    getUtileTasse() {
        return (this.ReddAnnuo * this.codRett) / 100;
    }
    getTasseInps() {
        return this.TasseInps;
    }
    getTasseIrpef() {
        return (this.getUtileTasse() * this.TasseIrpef) / 100;
    }
    getReddAnnuoNetto() {
        return this.ReddAnnuo - (this.getTasseInps() + this.getTasseIrpef());
    }
}
let artigiano = new AnnuoNettoArt(67500, 67, 15, 3500);
let utiltassart = artigiano.getUtileTasse();
console.log("utile tasse artigiano:" + utiltassart + "€");
let tassinpsart = artigiano.getTasseInps();
let tassirpefart = artigiano.getTasseIrpef();
let reddannuoart = artigiano.getReddAnnuoNetto();
console.log("tasse inps artigiano:" + tassinpsart + "€");
console.log("tasse irpef artigiano:" + tassirpefart + "€");
console.log("reddito annuo netto artigiano:" + reddannuoart + "€");
console.log("-------------------------------------------------");
class AnnuoNettoComm extends Commerciante {
    constructor(RedditoAnnuo, codRett, TasseIrpef, TasseInps) {
        super(RedditoAnnuo, codRett, TasseIrpef, TasseInps);
    }
    getUtileTasse() {
        return (this.ReddAnnuo * this.codRett) / 100;
    }
    getTasseInps() {
        return this.TasseInps;
    }
    getTasseIrpef() {
        return (this.getUtileTasse() * this.TasseIrpef) / 100;
    }
    getReddAnnuoNetto() {
        return this.ReddAnnuo - (this.getTasseInps() + this.getTasseIrpef());
    }
}
let commerciante = new AnnuoNettoComm(97500, 40, 15, 3500);
let utiltasscomm = commerciante.getUtileTasse();
console.log("utile tasse commerciante:" + utiltasscomm + "€");
let tassinpscomm = commerciante.getTasseInps();
let tassirpefcomm = commerciante.getTasseIrpef();
let reddannuocomm = commerciante.getReddAnnuoNetto();
console.log("tasse inps commerciante:" + tassinpscomm + "€");
console.log("tasse irpef commerciante:" + tassirpefcomm + "€");
console.log("reddito annuo netto commerciante:" + reddannuocomm + "€");
