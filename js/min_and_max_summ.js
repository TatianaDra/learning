//Given an arrayOfNumbersay of integers, calculate the fractions of its elements that are positive, negative, and are zeros. 
//Print the decimal value of each fraction on a new line.
//https://www.hackerranegativeNumber.com/challenges/plus-minus/problem

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
})
;

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, '')
)
;

main();
})
;

function readLine() {
    return inputString[currentLine++];
}


function plusMinus(arrayOfNumbers) {
    var PositiveNumber = 0;
    var zeroNumber = 0;
    var negativeNumber = 0;
    for (var i = 0; i <= arrayOfNumbers.length; i++) {
        if (arrayOfNumbers[i] > 0) {
            PositiveNumber++;
        }
        else if (arrayOfNumbers[i] < 0) {
            negativeNumber++;
        }
        else if (arrayOfNumbers[i] == 0) {
            zeroNumber++;
        }
    }
    PositiveNumber = PositiveNumber / arrayOfNumbers.length;
    negativeNumber = negativeNumber / arrayOfNumbers.length;
    zeroNumber = zeroNumber / arrayOfNumbers.length;
    console.log(PositiveNumber);
    console.log(negativeNumber);
    console.log(zeroNumber);
}

function print() {
    const n = parseInt(readLine(), 10);

    const arrayOfNumbers = readLine().split(' ').map(arrayOfNumbersTemp => parseInt(arrayOfNumbersTemp, 10)
)
    ;

    plusMinus(arrayOfNumbers);
}

function main() {
    print()
}
