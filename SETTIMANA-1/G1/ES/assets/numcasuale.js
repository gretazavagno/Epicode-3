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
var generateRandomNumber = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
var checkGuess = function (player, guess, target) {
    if (guess === target) {
        console.log("".concat(player, " ha indovinato il numero!"));
    }
    else {
        console.log("".concat(player, " non ha indovinato il numero."));
    }
};
var player1 = "Giocatore 1";
var player2 = "Giocatore 2";
function compareGuesses(player1, guess1, player2, guess2, target) {
    //calcoliamo differenza assoluta tra numero da indovinare (target) e tentativi dei giocatori (guess1 e guess2)
    var diff1 = Math.abs(target - guess1);
    var diff2 = Math.abs(target - guess2);
    if (diff1 === diff2) {
        console.log("Entrambi i giocatori si sono avvicinati allo stesso modo al numero estratto.");
    }
    else if (diff1 < diff2) {
        console.log("".concat(player1, " si \u00E8 avvicinato di pi\u00F9 al numero estratto."));
    }
    else {
        console.log("".concat(player2, " si \u00E8 avvicinato di pi\u00F9 al numero estratto."));
    }
}
function playGame(player1, player2) {
    var targetNumber = generateRandomNumber(1, 100); //estrae un numero tra 1 e 100
    var guess1 = generateRandomNumber(1, 100);
    var guess2 = generateRandomNumber(1, 100);
    console.log("Numero casuale generato: ".concat(targetNumber));
    console.log("".concat(player1, " indovina il numero: ").concat(guess1));
    console.log("".concat(player2, " indovina il numero: ").concat(guess2));
    checkGuess(player1, guess1, targetNumber);
    checkGuess(player2, guess2, targetNumber);
    compareGuesses(player1, guess1, player2, guess2, targetNumber);
}
playGame(player1, player2);
