//task: https://www.hackerrank.com/challenges/the-birthday-bar/problem

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the birthday function below.
function birthday(ArrayOfSquareNumbers, dateOfBirthday, monthOfBirthday) {
    var summOfAdjacentSqrs = 0;
    var countOfCandles = 0;
    var lengthOfMass = 0;
    lengthOfMass = ArrayOfSquareNumbers.length;
    for (var i = 0; i < lengthOfMass; i++) {
        var newI = i;

        for (var j = 0; j < monthOfBirthday; j++) {
            summOfAdjacentSqrs += ArrayOfSquareNumbers[newI + j]
        }
        ;

        if (summOfAdjacentSqrs == dateOfBirthday)
            countOfCandles++;
        summOfAdjacentSqrs = 0;
    }
    return countOfCandles;
}

function print() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const ArrayOfSquareNumbers = readLine().replace(/\s+$/g, '').split(' ').map(sTemp => parseInt(sTemp, 10)
)
    ;

    const dm = readLine().replace(/\s+$/g, '').split(' ');

    const dateOfBirthday = parseInt(dm[0], 10);

    const monthOfBirthday = parseInt(dm[1], 10);

    const result = birthday(ArrayOfSquareNumbers, dateOfBirthday, monthOfBirthday);

    ws.write(result + '\n');

    ws.end();
}

function main() {

    print()
}
