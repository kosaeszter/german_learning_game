import { familieWorter } from './worter/familie.js';
import { nummer } from './worter/nummer.js';

import promptSync from 'prompt-sync';
const prompt = promptSync({ sigint: true }); 


let numberOfTheWords;
let chooseProgram;
let nummerFunRun = false;
let familieFunRun = false;
let listOfTheNumbers;
console.log(nummer[152]);
console.clear();
console.log("Wilkommen! / Üdvözöllek!");
console.log("Was möchtest du heute üben?/ Mit szeretnél ma gyakorolni?")


function waitForEnter(userInput) {
    while (!(userInput == "")) {
        userInput = prompt("\nDrücken Sie die Eingabetaste/ Nyomd meg az entert!");
        console.clear();
    }
}

chooseProgram = prompt("1: Nummer (számok) oder 2: Familie Wörter (család-szavak)");

while (Number(chooseProgram) !== 1 && Number(chooseProgram) !== 2) {
    console.log("\nGeben Sie 0 oder 1 ein, um zu wählen/ írj 0-t vagy 1-est a választáshoz")
    chooseProgram = prompt("1: Nummer (számok) oder 2: Familie Wörter (család-szavak) ");
}
console.log("\ngute Wahl! /jó választás!");

numberOfTheWords = prompt("Wie viele Fragen möchten Sie?/ Hány kérdést szeretnél?");


function chooseFunction(userinput) {
    if (userinput == 1) {
        nummerFun(numberOfTheWords);
    } else {
        familieFun(numberOfTheWords);
    }
}

chooseFunction(chooseProgram);

function containsDiacritics(word) {
    const diacritics = ['ü', 'ö', 'ä', 'ß'];
    return diacritics.some(char => word.includes(char));
}

function nummerFun(number){
    console.clear();
    let listOfTheNumbers = {
        bad: [],
        good : []
    };
    for (let j = 0; j < number; j++) {
        let randomindex = Math.floor(Math.random() * 100);
        while (containsDiacritics(nummer[randomindex])) {
            randomindex= Math.floor(Math.random() * 100);
        }
        console.log(`Schreiben Sie es auf Deutsch/ Írd le németül: ${randomindex}`)
        let givenNum= prompt();
        if (givenNum !== nummer[randomindex]){
            listOfTheNumbers.bad.push(givenNum);
            listOfTheNumbers.good.push(randomindex, nummer[randomindex])
            console.log("\nLeider ist das die falsche Antwort! :( Sajnos ez rossz válasz :(")
            waitForEnter();
        } else{
            console.log("Sehr gut! :) / Nagyon jó! :)")
            waitForEnter();
        }
    }

    let percent= ((numberOfTheWords - listOfTheNumbers.bad.length)/numberOfTheWords)*100
    console.log(`Az eredményed: ${numberOfTheWords-listOfTheNumbers.bad.length}/${numberOfTheWords}`)
    console.log(`Ez ${percent}%-os teljesítmény!! \n`)
    if (!(listOfTheNumbers.bad.length==0)) {
        console.log("Falsche Antwort/en/ helytelen válasz/ok: ")
        console.log(listOfTheNumbers.bad);
        console.log("Die richtige Lösung/en / helyes megoldás/ok: ");
        console.log(listOfTheNumbers.good);
    }
    return listOfTheNumbers;
}

function familieFun(number) {
    console.clear();
    for (let i = 0; i < numberOfTheWords; i++) {
        console.log("fejlesztés alatt xd");
        return number;
    }
}