//task: https://www.hackerrank.com/challenges/mini-max-sum/problem

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the miniMaxSum function below.
function miniMaxSum(arr) {
    
var min=Number.POSITIVE_INFINITY;
var max=Number.POSITIVE_INFINITY;

    min=0;
    max=0;
if (arr[3]<arr[4] && arr[0]<arr[1])
    {min=arr[0]+arr[1]+arr[2]+arr[3]; max=arr[4]+arr[1]+arr[2]+arr[3];
     }
else if (arr[3]>=arr[4] && arr[0]>=arr[1])
{max=arr[0]+arr[2]+arr[3]+arr[4];
min=arr[0]+arr[1]+arr[2]+arr[4];}
    
else if (arr[3]>=arr[4] && arr[0]<arr[1])
    {max=arr[4]+arr[1]+arr[2]+arr[3];
    min=arr[0]+arr[1]+arr[2]+arr[4]}
else if (arr[3]<arr[4] && arr[0]>=arr[1])
    {min=arr[0]+arr[1]+arr[2]+arr[3];
   max=arr[0]+arr[2]+arr[4]+arr[3]}
    
    

    
console.log(min, max)    
}

function main() {
    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
