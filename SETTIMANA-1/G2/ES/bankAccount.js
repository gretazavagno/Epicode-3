"use strict";
class SonAccount {
    constructor(balanceInit) {
        // costruttore della classe che referenzia la proprietà balanceInit
        this.balanceInit = balanceInit;
    }
    // implementazione del metodo deposit
    deposit(amount) {
        return amount;
    }
    // implementazione del metodo oneWithdraw
    oneWithdraw(amount) {
        return amount;
    }
    // implementazione del metodo twoWithdraw
    twoWithdraw(amount) {
        return amount;
    }
    // implementazione del metodo totalBalance
    totalBalance() {
        return this.oneWithdraw(500) - this.twoWithdraw(400);
    }
}
console.log("------------son account----------------- " + "\n");
// set della proprietà al costruttore
let son = new SonAccount(0);
console.log(son);
// stampo i versamenti-prelievi fatti ed il saldo attuale del conto
console.log("deposit:+" + son.deposit(1000));
console.log("withdraw:-" + son.oneWithdraw(500));
console.log("withdraw:-" + son.twoWithdraw(400));
console.log("totalBalance:" + son.totalBalance());
// classe MotherAccount estende SonAccount
class MotherAccount extends SonAccount {
    //costruttore referenzia la proprietà
    constructor(balanceInit) {
        super(balanceInit);
    }
    // I metodi sottostanti sono commentati in quanto identici a quelli della superclasse
    // public deposit(amount: number): number {
    // 	return amount;
    // }
    // public oneWithdraw(amount: number): number {
    // 	return amount;
    // }
    // public twoWithdraw(amount: number): number {
    // 	return amount;
    // }
    getBalance() {
        return this.oneWithdraw(500) - this.twoWithdraw(400);
    }
    // implementazione del metodo addInterest
    addInterest(rate) {
        return (this.getBalance() * rate) / 100;
    }
    // implementazione del metodo totalBalance
    totalBalance() {
        return this.getBalance() - this.addInterest(10);
    }
}
let mother = new MotherAccount(0);
console.log("--------------mother account----------------------------------" + "\n");
console.log(mother);
// stampo i versamenti-prelievi fatti ed il saldo attuale del conto
console.log("deposit:+" + mother.deposit(1000));
console.log("withdraw:-" + mother.oneWithdraw(500));
console.log("withdraw:-" + mother.twoWithdraw(400));
console.log("totalBalance:" + mother.totalBalance());
