//task: https://www.hackerrank.com/challenges/the-birthday-bar/problem

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the birthday function below.
function birthday(s, d, m) {
    var summ=0;
    var n=0;
   
    for (var i=0; i<s.length; i++)
        { var newI=i;
        
    for ( var j=0; j<m; j++)
    {summ+=s[newI+j]};
        
    if (summ==d)
        n++;
    summ=0;}
    return n;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const s = readLine().replace(/\s+$/g, '').split(' ').map(sTemp => parseInt(sTemp, 10));

    const dm = readLine().replace(/\s+$/g, '').split(' ');

    const d = parseInt(dm[0], 10);

    const m = parseInt(dm[1], 10);

    const result = birthday(s, d, m);

    ws.write(result + '\n');

    ws.end();
}
