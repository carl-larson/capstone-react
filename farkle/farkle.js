// const assert = require('assert');
// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
'use strict'
let score1 = 0;
let score2 = 0;
let player = 1;
let points = 0;
let savedPoints = 0;

class Die {
    constructor (name, keepName) {
        this.name = name;
        this.value = 1;
        this.keep = false;
        this.saved = false;
        this.keepName = keepName;
        // this.image = ;
    }
    rollDie(){
        if (this.keep == false) {
            this.value = Math.floor(Math.random() * 6)+1;
            console.log(`Rolled ${this.name}`)
            updateImage(this.value, this.name);
        } else {
            
            if (this.saved == false){
                moveDie(this.name, this.keepName);
                this.saved = true;
            }
        }
    }
}

let die1 = new Die ('die1', 'keep1');
let die2 = new Die ('die2', 'keep2');
let die3 = new Die ('die3', 'keep3');
let die4 = new Die ('die4', 'keep4');
let die5 = new Die ('die5', 'keep5');
let die6 = new Die ('die6', 'keep6');

function rollDice(){
    savedPoints = points;
    die1.rollDie();
    die2.rollDie();
    die3.rollDie();
    die4.rollDie();
    die5.rollDie();
    die6.rollDie();
}

function keepDie(dieButton){
    let dieName = dieButton.name;
    let thisDie = document.getElementById(dieName);
    console.log(dieName);
    // countPoints(dieButton.value, dieButton.keep);
    
    if (dieButton.keep == false){
        dieButton.keep = true;
        thisDie.firstChild.style.borderColor = 'red';
    } else {
        dieButton.keep = false;
        thisDie.firstChild.style.borderColor = 'gray';
    }
    keepCount(dieButton);
}

function keepCount(){
    // let dieName = dieButton.name;
    // let dieValue = dieButton.value;
    let dieArray = [die1, die2, die3, die4, die5, die6];
    let keptDice = [];
    dieArray.forEach((item, index) => {
        // console.log(item.value);
        if (item.keep == true && item.saved == false) {
            keptDice.push(item.value);
        } 
    })
    // keptDice.push(dieValue)
    countPoints(keptDice);
}

function moveDie(name, keepName) {
    let thisDie = document.getElementById(name);
    let diePic = thisDie.firstChild;
    // let keepName;
    // if (name === 'die1') {
    //     keepName = 'keep1';
    // }
    // if (name === 'die2') {
    //     keepName = 'keep2';
    // }
    // if (name === 'die3') {
    //     keepName = 'keep3';
    // }
    // if (name === 'die4') {
    //     keepName = 'keep4';
    // }
    // if (name === 'die5') {
    //     keepName = 'keep5';
    // }
    // if (name === 'die6') {
    //     keepName = 'keep6';
    // }
    let movePic = document.getElementById(keepName);
    movePic.append(diePic);
    // thisDie.removeChild(diePic);

}

function passDice(){
    updateScore();
}

// function countPoints(value, kept){
//     console.log(kept);
//     if (kept == true) {
//         value = value*-1;
//     }
//     updatePoints(value);
// }

function countPoints(keptDice){
    console.log(keptDice);
    keptDice.sort();
    // console.log("sorted ", keptDice);
    let value = savedPoints;
    for (let i = 0; i<keptDice.length; i++){
        
    }
    console.log(keptDice);
    // let joinedDice = keptDice.join('');
    // console.log("Strung: ", joinedDice);
    // if (joinedDice == '1'){
    //     value = 100;
    // } else if (joinedDice == '11'){
    //     value = 200;
    // } else if (joinedDice == '111'){
    //     value = 1000;
    // } else if (joinedDice == '1111'){
    //     value = 1100;
    // } else if (joinedDice == '11111'){
    //     value = 1200;
    // } else if (joinedDice == '111111'){
    //     value = 5000;
    // } else if (joinedDice == '5'){
    //     value = 50;
    // } else if (joinedDice == '55'){
    //     value = 100;
    // } else if (joinedDice == '555'){
    //     value = 500;
    // } else if (joinedDice == '5555'){
    //     value = 600;
    // } else if (joinedDice == '55555'){
    //     value = 700;
    // } else if (joinedDice == '555555'){
    //     value = 5000;
    // } else if (joinedDice == '15'){
    //     value = 150;
    // } else if (joinedDice == '115'){
    //     value = 250;
    // } else if (joinedDice == '1115'){
    //     value = 1050;
    // } else if (joinedDice == '11115'){
    //     value = 1150;
    // } else if (joinedDice == '222'){
    //     value = 200;
    // } else if (joinedDice == '333'){
    //     value = 300;
    // } else if (joinedDice == '444'){
    //     value = 400;
    // } else if (joinedDice == '666'){
    //     value = 600;
    // } else if (joinedDice == '1222'){
    //     value = 300;
    // } else if (joinedDice == '1333'){
    //     value = 400;
    // } else if (joinedDice == '1444'){
    //     value = 500;
    // } else if (joinedDice == '1555'){
    //     value = 600;
    // } else if (joinedDice == '1666'){
    //     value = 700;
    // } 
    updatePoints(value);
}

// Updates the temporary points of the current player as dice are kept
function updatePoints(value) {
    let pointKeeper = document.getElementById('points');
    // let pointValue = parseInt(pointKeeper.innerHTML);
    // console.log("The value is ", pointValue)
    // pointValue = pointValue + value;
    pointKeeper.innerHTML = value.toString();
    points = value;
    console.log("point value: ", value);
}

// Updates the score of each player
function updateScore(){
    if (player === 1){
        score1 = score1 + savedPoints;
    } else {
        score2 = score2 + savedPoints;
    }
    updatePoints(0);
    document.getElementById("score1").innerHTML = score1.toString();
    document.getElementById("score2").innerHTML = score2.toString();
}

function updateImage(value, name){
    let thisDie = document.getElementById(name).firstChild;
    if (value == 1) {
        thisDie.style.backgroundPosition = '0px 0px';
    }
    if (value == 2) {
        thisDie.style.backgroundPosition = '-64px 0px';
    }
    if (value == 3) {
        thisDie.style.backgroundPosition = '0px -64px';
    }
    if (value == 4) {
        thisDie.style.backgroundPosition = '-64px -64px';
    }
    if (value == 5) {
        thisDie.style.backgroundPosition = '0px -128px';
    }
    if (value == 6) {
        thisDie.style.backgroundPosition = '-64px -128px';
    }

}



window.onload = function() {
    const square = document.getElementsByClassName("one");
    const dicePic = document.createElement('p');
    
    // dicePic.style.borderColor = 'gray';
    for (let i=0; i<6; i++){
        const dicePic = document.createElement('p');
        square[i].append(dicePic);
    }
    console.log("Hello");
}
