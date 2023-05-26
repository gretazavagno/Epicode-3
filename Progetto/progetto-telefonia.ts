/*Creare un'interfaccia con due proprietà (credito: number e numeroChiamate: number) e cinque metodi:
ricarica: void = ricarica del credito con un parametro per indicare di quanto è la ricarica
chiamata: void = simula una chiamata con un parametro che indica quanti minuti dura la chiamata
numero404: number = restituisce il credito disponibile
getNumeroChiamate: number = restituisce quante chiamate sono state fatte
azzeraChiamate: void = azzera le chiamate

Definire tre classi (primo, secondo, e terzo) che implementano l'interfaccia: nelle tre classi deve essere tutto public, proprietà e metodi

Istanziare le classi una volta a ciascuna, indicando i due valori numerici per credito e numerochiamate, eseguire ricarica/chiamata/ricarica/chiamata, dopodiché console.log con:
credito residuo, numero chiamate, azzeramento chiamate

Si assume che ogni minuto di chiamata costi 0.20euri*/

interface Telefono {
    credito: number; //credito iniziale
    numeroChiamate: number; //quante chiamate vengono fatte
    ricarica(euroricarica: number): void;
    chiamata(minuti: number): void;
    numero404(): number;
    getNumberoChiamate(): number;
    azzeraChiamate(): number;
}

class Primo implements Telefono{
    public credito: number;
    public numeroChiamate: number;

    constructor(_credito: number, _numeroChiamate: number){
        this.credito = _credito;
        this.numeroChiamate = _numeroChiamate;
    }

    ricarica(euroricarica: number): void {
        this.credito += euroricarica;
    }

    chiamata(minuti: number): void{   //minuti x ogni chiamata
        const costoChiamata = minuti * 0.20;
        if(costoChiamata <= this.credito){ //se il costo della chiamata è minore del credito totale allora scalo i soldi dal credito 
            this.credito -= costoChiamata;
            this.numeroChiamate ++; //aumenta il conteggio delle chiamate di 1
        }else{
            console.log("Credito insufficiente per chiamare");
        }
    }

    numero404(): number {
        return this.credito;
    }

    getNumberoChiamate(): number {
        return this.numeroChiamate;
    }

    azzeraChiamate(): number {
        return this.numeroChiamate = 0;
    }

}

const utente1 = new Primo(10, 0); //credito di 10euro e 0 chiamate
console.log(`Credito residuo: ${utente1.numero404()}`);
console.log(`Numero di chiamate: ${utente1.getNumberoChiamate()}`);

utente1.ricarica(5);
utente1.chiamata(4);
utente1.ricarica(5);
utente1.chiamata(3);

console.log(`Credito residuo: ${utente1.numero404()}`)
console.log(`Numero chiamate: ${utente1.getNumberoChiamate()}`)

utente1.azzeraChiamate();

console.log("Chiamate effettuate azzerate");
console.log(`Numero chiamate: ${utente1.getNumberoChiamate()}`);


/*Dati inseriti:  
    credito iniziale 10 euro e fatte 0 chiamate.
    
    Ricarica di 5 --> 15 euro 
    4 minuti di chiamata 
    ----> TOT 14,2 euro e una chiamata fatta
    Ricarica 5 --> 14,2 + 5= 19,2 euro
    3 minuti di chiamata 
    ----> TOT 18,6 euro e due chiamate fatte

*/