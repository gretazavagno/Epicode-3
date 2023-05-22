var Studente = /** @class */ (function () {
    function Studente(_nome, _cognome) {
        this.nome = _nome;
        this.cognome = _cognome;
    }
    Studente.prototype.getStudente = function () {
        return "".concat(this.nome, " ").concat(this.cognome);
    };
    return Studente;
}());
var newStudente = new Studente('Mario', 'Rossi');
console.log(newStudente);
