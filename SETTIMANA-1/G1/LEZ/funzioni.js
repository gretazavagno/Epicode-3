function persona(nome, cognome, eta) {
    if (eta) {
        return "Signor ".concat(nome, " ").concat(cognome, " di anni ").concat(eta);
    }
    else {
        return "Signor ".concat(nome, " ").concat(cognome);
    }
}
console.log(persona("Dario", "Del Giudice", 55));
console.log(persona("Mario", "Rossi"));
// console.log(persona('Nicola')); Non posso passare un solo parametro perché la funzione chiede DUE parametri obbligatori
var mioCorso = function (nomeCorso, annoCorso) {
    return "Corso ".concat(nomeCorso, " dell'anno ").concat(annoCorso);
};
console.log(mioCorso("FS0223", 2023));
var Stati = {
    nome: "Italia",
    capitale: "Roma",
    descrizione: function () {
        return "la capitale di ".concat(this.nome, " \u00E8 ").concat(this.capitale);
    },
};
console.log(Stati.descrizione());
var divisione = function (val1, val2) {
    var risultato = val1 / val2;
    try {
        if (val2 === 0)
            throw new Error("Errore! Divisione per zero");
        if (risultato !== Infinity) {
            console.log(risultato);
        }
    }
    catch (err) {
        console.error(err.message);
    }
    finally {
        console.log("La gestione degli errori è stata eseguita");
    }
};
var risultato = divisione(4, 0);
