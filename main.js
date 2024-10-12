import { familieWorter } from './worter/familie.js';
import { nummer } from './worter/nummer.js';

import promptSync from 'prompt-sync';
const prompt = promptSync({ sigint: true });

let numberOfTheWords;
let chooseProgram;
let nummerFunRun=false;
let familieFunRun=false;

console.clear();
console.log("Wilkommen! / Üdvözöllek!");
console.log("Was möchtest du heute üben?/ Mit szeretnél ma gyakorolni?")


chooseProgram=prompt("1: Nummer (számok) oder 2: Familie Wörter (család-szavak)");

while (Number(chooseProgram) !== 1 && Number(chooseProgram) !== 2) {
     chooseProgram=prompt("1: Nummer (számok) oder 2: Familie Wörter (család-szavak) ");
}
console.log("gute Wahl! /jó választás!");


function chooseFunction(userinput){
    if (userinput == 1) {
        nummerFun(5);
    }else{
        familieFun(2);
    }
}

chooseFunction(chooseProgram);

function nummerFun(number){
        let a= console.log(Math.random())
        return a;
}

function familieFun(number){
    console.log("belement");
    return number;
}







