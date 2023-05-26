"use strict";
/*Scrivi un programma che dati due numeri di due ipotetici giocatori:
- Generi un numero casuale compreso tra 1 e 100
- Verifichi se uno dei due giocatori ha azzeccato il numero casuale
- Nel caso in cui nessuno dei due non abbia indovinato il numero dice quale dei due giocatori si è avvicinato di più al numero estratto.

QUESTO E' L'ESERCIZIO FATTO CON JS:
var btnVerifica = document.getElementById('verifica');
var btnReset = document.getElementById('reset');
var giocatore1 = document.getElementById('giocatore1');
var giocatore2 = document.getElementById('giocatore2');
var valore1;
var valore2;
var messaggio = document.getElementById('risultato');
var estratto;

window.addEventListener('load', function () {
    btnReset.setAttribute('disabled', 'true');
    btnReset.style.backgroundColor = 'red';
    btnReset.style.color = 'white';
});

btnVerifica.addEventListener('click', function () {
    valore1 = Number(giocatore1.value);
    valore2 = Number(giocatore2.value);
    verifica();
});

verifica = () => {
    if (!valore1 || !valore2) {
        messaggio.innerHTML =
            'Attenzione! Entrambi i giocatori devono inserire un valore!';
        return;
    } else if (valore1 < 1 || valore2 < 1 || valore1 > 100 || valore2 > 100) {
        messaggio.innerHTML =
            'Attenzione! Inserire un valore numerico tra 1 e 100!';
        return;
    } else if (valore1 === valore2) {
        messaggio.innerHTML = 'Attenzione! Inserire valori diversi!';
        return;
    } else {
        estrai();
        calcola();
    }
};

estrai = () => {
    estratto = Math.floor(Math.random() * 100 + 1);
};

calcola = () => {
    btnReset.removeAttribute('disabled');
    btnReset.style.backgroundColor = 'green';
    giocatore1.setAttribute('disabled', 'true');
    giocatore1.style.backgroundColor = 'lightgray';
    giocatore2.setAttribute('disabled', 'true');
    giocatore2.style.backgroundColor = 'lightgray';

    document.getElementById(
        'estratto'
    ).innerHTML = `Numero estratto: ${estratto}`;

    switch (true) {
        case valore1 === estratto:
            messaggio.innerHTML = 'Il giocatore 1 ha indovinato!';
            break;

        case valore2 === estratto:
            messaggio.innerHTML = 'Il giocatore 2 ha indovinato!';
            break;

        case Math.abs(estratto - valore1) < Math.abs(estratto - valore2):
            messaggio.innerHTML =
                'Nessuno ha vinto ma il giocatore 1 si è avvicinato di più';
            break;

        case Math.abs(estratto - valore2) < Math.abs(estratto - valore1):
            messaggio.innerHTML =
                'Nessuno ha vinto ma il giocatore 2 si è avvicinato di più';
            break;

        default:
            messaggio.innerHTML = 'Pareggio!';
            break;
    }

    btnVerifica.setAttribute('disabled', 'true');
    btnVerifica.style.backgroundColor = 'red';
    btnVerifica.style.color = 'white';
};

btnReset.addEventListener('click', function () {
    btnVerifica.removeAttribute('disabled');
    btnVerifica.removeAttribute('style');
    giocatore1.removeAttribute('disabled');
    giocatore1.removeAttribute('style');
    giocatore2.removeAttribute('disabled');
    giocatore2.removeAttribute('style');
    giocatore1.value = '';
    giocatore2.value = '';
    messaggio.innerHTML = '';
    document.getElementById('estratto').innerHTML = '';
    btnReset.setAttribute('disabled', 'true');
    btnReset.style.backgroundColor = 'red';
    btnReset.style.color = 'white';
});
*/
//Funzione che genera un numero causale compreso tra i valori dei due parametri min e max (poi verranno assegnati come 1 e 100)
const generateRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
//FUnzione che confronta il numero estratto da un giocatore con il numero target estratto e mi dice se lo ha indovinato o no
const checkGuess = (player, guess, target) => {
    if (guess === target) {
        console.log(`${player} ha indovinato il numero!`);
    }
    else {
        console.log(`${player} non ha indovinato il numero.`);
    }
};
//dichiaro i due giocatori
const player1 = "Giocatore 1";
const player2 = "Giocatore 2";
//Funzione che compara le puntate dei due giocatori con il numero target estratto e dice chi si è avvicinato di più
function compareGuesses(player1, guess1, player2, guess2, target) {
    //calcoliamo differenza assoluta tra numero da indovinare (target) e tentativi dei giocatori (guess1 e guess2)
    const diff1 = Math.abs(target - guess1); //math.abs mi restituisce il valore assoluto di un numero
    const diff2 = Math.abs(target - guess2);
    //verifica chi è arrivato più vicino al numero target (minore è la differenza più è vicino)
    if (diff1 === diff2) {
        console.log("Entrambi i giocatori si sono avvicinati allo stesso modo al numero estratto.");
    }
    else if (diff1 < diff2) {
        console.log(`${player1} si è avvicinato di più al numero estratto.`);
    }
    else {
        console.log(`${player2} si è avvicinato di più al numero estratto.`);
    }
}
//Funzione che mi permette di stampare tutti i valori ed esegue tutte le funzioni dichiarate prima
function playGame(player1, player2) {
    const targetNumber = generateRandomNumber(1, 100); //estrae un numero tra 1 e 100 e lo stampa a riga 147
    const guess1 = generateRandomNumber(1, 100);
    const guess2 = generateRandomNumber(1, 100);
    console.log(`Numero casuale generato: ${targetNumber}`);
    console.log(`${player1} indovina il numero: ${guess1}`);
    console.log(`${player2} indovina il numero: ${guess2}`);
    checkGuess(player1, guess1, targetNumber); //questa funzione mi dice se il giocatore ha indovinato o no il numero target
    checkGuess(player2, guess2, targetNumber);
    compareGuesses(player1, guess1, player2, guess2, targetNumber); //funzione che mi dice chi si è avvicinato di più
}
playGame(player1, player2); //richiamo la funzione
