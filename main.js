import { familieWorter } from './worter/familie.js';
import { nummer } from './worter/nummer.js';
import { farbe} from './worter/farbe.js';
import { verben} from './worter/verben.js';

import promptSync from 'prompt-sync';
const prompt = promptSync({ sigint: true });


let numberOfTheWords;
let chooseProgram;
let nummerFunRun = false;
let wordsFunRun = false;


console.clear();
console.log("Wilkommen! / Üdvözöllek!");
console.log("Was möchtest du heute üben?/ Mit szeretnél ma gyakorolni?");


function waitForEnter(userInput) {
    while (!(userInput == "")) {
        userInput = prompt("\nDrücken Sie die Eingabetaste/ Nyomd meg az entert!");
        console.clear();
    }
}

chooseProgram = prompt("1: Nummer (számok) oder 2:  Wörter (szavak)");

while (Number(chooseProgram) !== 1 && Number(chooseProgram) !== 2) {
    console.log("\nGeben Sie 1 oder 2 ein, um zu wählen/ írj 1-est vagy 2-est a választáshoz")
    chooseProgram = prompt("1: Nummer (számok) oder 2: Wörter (szavak) ");
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

function containsSpecial(word) {
    const diacritics = ['ü', 'ö', 'ä', 'ß'];
    
    for (let i = 0; i < diacritics.length; i++) {
        if (word.includes(diacritics[i])) {
            return true;
        }
    }
    
    return false;
}

function nummerFun(number) {
    console.clear();
    let listOfTheNumbers = {
        bad: [],
        good: []
    };
    for (let j = 0; j < number; j++) {
        let randomindex = Math.floor(Math.random() * 100);
        while (containsSpecial(nummer[randomindex])) {
            randomindex = Math.floor(Math.random() * 100);
        }
        console.log(`Schreiben Sie es auf Deutsch/ Írd le németül: ${randomindex}`);
        let givenNum = prompt();
        if (givenNum !== nummer[randomindex]) {
            listOfTheNumbers.bad.push(givenNum);
            listOfTheNumbers.good.push(randomindex, nummer[randomindex]);
            console.log("\nLeider ist das die falsche Antwort! :( Sajnos ez rossz válasz :(");
            waitForEnter();
        } else {
            console.log("Sehr gut! :) / Nagyon jó! :)");
            waitForEnter();
        }
    }

    let percent = ((numberOfTheWords - listOfTheNumbers.bad.length) / numberOfTheWords) * 100
    console.log(`Az eredményed: ${numberOfTheWords - listOfTheNumbers.bad.length}/${numberOfTheWords}`);
    console.log(`Ez ${percent}%-os teljesítmény!! \n`);

    if (!(listOfTheNumbers.bad.length == 0)) {
        console.log("Falsche Antwort/en/ helytelen válasz/ok: ");
        console.log(listOfTheNumbers.bad);
        console.log("Die richtige Lösung/en / helyes megoldás/ok: ");
        console.log(listOfTheNumbers.good);
    }
    return listOfTheNumbers;
}

function familieFun(number) {

    console.log("\nMelyik témakört szeretnéd gyakorolni?/ Welches Thema möchtest du üben?");
    console.log('1: Familie/család');
    console.log("2: Farbe/színek");
    console.log("3: Verben/igék");

    let answer = prompt();
    
    while (Number(answer) !== 1 && Number(answer) !==2 && Number(answer) !== 3) {
        answer=prompt("\nGeben Sie 1, 2 oder 3 ein, um zu wählen/ írj 1-est 2-est vagy 3-ast a választáshoz")
    } 
    console.log("\ngute Wahl! /jó választás!");
    console.clear();
    let chooseTopic;

    if (answer == 1) {
        chooseTopic= familieWorter;
    } else if (answer == 2) {
        chooseTopic= farbe;
    }else {
        chooseTopic = verben;
    }


    let listOfTheWords = {
        bad: [],
        good: []
    };

    for (let j = 0; j < number; j++) {

        let randomindex = Math.floor(Math.random() * chooseTopic.length);

        console.log(`!!! Für Substantive ist auch ein Artikel erforderlich/Főnevek esetén névelő is kell`);
        console.log("!!! Bitte schreiben Sie ss statt ß / Kérlek ß helyett ss-et írj ")

        console.log(`\nSchreiben Sie es auf Deutsch/ Írd le németül: ${chooseTopic[randomindex]["magyar"]}`);


        let givenWort = prompt();

        let wort = chooseTopic[randomindex]["nevelo"] + chooseTopic[randomindex]["szo"];

        if (givenWort !== wort) {
            listOfTheWords.bad.push(givenWort);
            listOfTheWords.good.push(chooseTopic[randomindex]["magyar"], wort);
            console.log("\nLeider ist das die falsche Antwort! :( Sajnos ez rossz válasz :(");
            waitForEnter();
        } else {
            console.log("Sehr gut! :) / Nagyon jó! :)");
            waitForEnter();
        }

        }
        let percent = ((numberOfTheWords - listOfTheWords.bad.length) / numberOfTheWords) * 100
        console.log(`Az eredményed: ${numberOfTheWords - listOfTheWords.bad.length}/${numberOfTheWords}`);
        console.log(`Ez ${percent}%-os teljesítmény!! \n`);

        if (!(listOfTheWords.bad.length == 0)) {
            console.log("Falsche Antwort/en/ helytelen válasz/ok: ")
            console.log(listOfTheWords.bad);
            console.log("Die richtige Lösung/en / helyes megoldás/ok: ");
            console.log(listOfTheWords.good);
    }
    return listOfTheWords;
}