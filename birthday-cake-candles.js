//task: https://www.hackerrank.com/challenges/birthday-cake-candles/problem
////todo: function for printing of result

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin = > {
    inputString += inputStdin;
})
;

process.stdin.on('end', _ = > {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str = > str.replace(/\s*$/, '')
)
;

main();
})
;

function readLine() {
    return inputString[currentLine++];
}

// Complete the birthdayCakeCandles function below.
function birthdayCakeCandles(arrOfCandles) {
    var maxHeightOfCandle = Number.POSITIVE_INFINITY;
    maxHeightOfCandle = arrOfCandles[0];
    var countOfHighCandles = 0;
    for (var i = 0; i < arrOfCandles.length; i++) //search of the highest candle
        if (maxHeightOfCandle <= arrOfCandles[i]) {
            maxHeightOfCandle = arrOfCandles[i];
        }
    for (var k = 0; k < arrOfCandles.length; k++) //count of the highest candles
        if (arrOfCandles[k] == maxHeightOfCandle) {
            countOfHighCandles++
        }
    return (countOfHighCandles)
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arCount = parseInt(readLine(), 10);

    const arrOfCandles = readLine().split(' ').map(arTemp = > parseInt(arTemp, 10)
)
    ;

    let result = birthdayCakeCandles(ar);

    ws.write(result + "\n");

    ws.end();
}
