//task: https://www.hackerrank.com/challenges/divisible-sum-pairs/problem
//todo: function for printing of result
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

// Complete the divisibleSumPairs function below.
function divisibleSumPairs(length, devider, array) {
    var divPairsOfNumbers = 0;
    for (var i = 0; i < array.length; i++)
        for (var j = i + 1; j < array.length; j++) {
            if (((array[i] + array[j]) % devider == 0) && (i < j))
                divPairsOfNumbers++;

        }
    return divPairsOfNumbers;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nk = readLine().split(' ');

    const length = parseInt(nk[0], 10);

    const devider = parseInt(nk[1], 10);

    const array = readLine().split(' ').map(arTemp = > parseInt(arTemp, 10)
)
    ;

    let result = divisibleSumPairs(length, devider, array);

    ws.write(result + "\n");

    ws.end();
}
