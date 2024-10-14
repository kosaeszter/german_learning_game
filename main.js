import promptSync from 'prompt-sync';
const prompt = promptSync({ sigint: true });
/*
let listOfImports=[ { familieWorter }, { nummer }, { farbe }, { verben }];
let listOfImportRep=['./worter/familie.js', './worter/nummer.js','./worter/farbe.js', './worter/verben.js'  ];

for (let index = 0; index < listOfImports.length; index++) {
    import listOfImports[i] from listOfImportRep[i];  
}
*/

import { familieWorter } from './worter/familie.js';
import { nummer } from './worter/nummer.js';
import { farbe } from './worter/farbe.js';
import { verben } from './worter/verben.js';

function waitForEnter(userInput) {
    while (!(userInput == "")) {
        userInput = prompt("\nDrücken Sie die Eingabetaste/ Nyomd meg az entert!");
        console.clear();
    }
}

function gamefunction(userInput) {
    console.clear();
    console.log("Wilkommen! / Üdvözöllek!");
    console.log("Was möchtest du heute üben?/ Mit szeretnél ma gyakorolni?");

    let choseWordsOrNumbers = prompt("1: Nummer (számok) oder 2:  Wörter (szavak)");
    while (Number(choseWordsOrNumbers) !== 1 && Number(choseWordsOrNumbers) !== 2) {
        console.log("\nGeben Sie 1 oder 2 ein, um zu wählen/ írj 1-est vagy 2-est a választáshoz")
        choseWordsOrNumbers = prompt("1: Nummer (számok) oder 2: Wörter (szavak) ");
    }
    console.log("\ngute Wahl! /jó választás!");
    console.clear();

    let numberOfTheQuestions = prompt("Wie viele Fragen möchten Sie?/ Hány kérdést szeretnél?");
    while (numberOfTheQuestions > 25) {
        numberOfTheQuestions = prompt("Wie viele Fragen möchtest du?");
    }

    let objectOfAnswers = {
        bad: [],
        good: []
    }

    let question;
    let answer;
    let data;

    if (Number(choseWordsOrNumbers) == 1) {
        data = nummer;
    } else {
        console.log("\nMelyik témakört szeretnéd gyakorolni?/ Welches Thema möchtest du üben?");
        console.log('1: Familie/család');
        console.log("2: Farbe/színek");
        console.log("3: Verben/igék");

        let answerAboutTopic = prompt();

        while (Number(answerAboutTopic) !== 1 && Number(answerAboutTopic) !== 2 && Number(answerAboutTopic) !== 3) {
            answerAboutTopic = prompt("\nGeben Sie 1, 2 oder 3 ein, um zu wählen/ írj 1-est 2-est vagy 3-ast a választáshoz")
        }
        console.log("\ngute Wahl! /jó választás!");
        waitForEnter();

        if (answerAboutTopic == 1) {
            data = familieWorter;
        } else if (answerAboutTopic == 2) {
            data = farbe;
        } else {
            data = verben;
        }
    }

    //choose random word
    for (let j = 0; j < numberOfTheQuestions; j++) {
        let randomindex = Math.floor(Math.random() * data.length);
        if (data == nummer) {
            question = randomindex;
            answer = data[randomindex];
        } else {
            question = data[randomindex]["magyar"];
            answer = data[randomindex]["nevelo"] + data[randomindex]["szo"];
        }
        console.log(`Schreiben Sie es auf Deutsch/ Írd le németül: ${question}`);
        let givenAnswer = prompt();

        if (givenAnswer !== answer) {
            objectOfAnswers.bad.push(question+":"+givenAnswer);
            objectOfAnswers.good.push(question+":" + answer);
            console.log("\nLeider ist das die falsche Antwort! :( Sajnos ez rossz válasz :(");
            waitForEnter();

        } else {
            console.log("Sehr gut! :) / Nagyon jó! :)");
            waitForEnter();
        }
    }


    let percent = ((numberOfTheQuestions - objectOfAnswers.bad.length) / numberOfTheQuestions) * 100
    console.log(`Az eredményed: ${numberOfTheQuestions - objectOfAnswers.bad.length}/${numberOfTheQuestions}`);
    console.log(`Ez ${percent}%-os teljesítmény!! \n`);

    if (!(objectOfAnswers.bad.length == 0)) {
        console.log("Falsche Antwort/en/ helytelen válasz/ok: ");
        for (const element of objectOfAnswers.bad) {
            console.log(element);
        }
        console.log("\nDie richtige Lösung/en / helyes megoldás/ok: ");
        for (const element of objectOfAnswers.good) {
            console.log(element);
        }
    }

    return objectOfAnswers;
}

gamefunction();
