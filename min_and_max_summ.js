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
    
var sum=Number.POSITIVE_INFINITY;
var SummExpectFirst=Number.POSITIVE_INFINITY;
var SummExpectSecond=Number.POSITIVE_INFINITY;
var SummExpectThird=Number.POSITIVE_INFINITY;
var SummExpectFourth=Number.POSITIVE_INFINITY;
var SummExpectFifth=Number.POSITIVE_INFINITY;
var min=Number.POSITIVE_INFINITY;
var max=Number.POSITIVE_INFINITY;
    sum=0;
    SummExpectFirst=0;
    SummExpectSecond=0;
    SummExpectThird=0;
    SummExpectFourth=0;
    SummExpectFifth=0;
    min=0;
    max=0;
for (var i=0; i<arr.length; i++)
   {    sum +=arr[i];}
        SummExpectFirst=sum-arr[0];
        SummExpectSecond=sum-arr[1];
        SummExpectThird=sum-arr[2];
        SummExpectFourth=sum-arr[3];
        SummExpectFifth=sum-arr[4];
if (SummExpectFirst>=SummExpectSecond)
        {min=SummExpectSecond; max=SummExpectFirst;}
else
    {min=SummExpectFirst;max=SummExpectSecond;}
    
if (SummExpectThird<=min)
    {min=SummExpectThird;}
else if (SummExpectThird>=max)
         {max=SummExpectThird;}
    
if (SummExpectFourth<=min)
    {min=SummExpectFourth;}
else if (SummExpectFourth>=max)
         {max=SummExpectFourth;}
    
if (SummExpectFifth<=min)
    {min=SummExpectFifth;}
else if (SummExpectFifth>=max)
         {max=SummExpectFifth;}


    
console.log(min, max)    
}

function main() {
    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
