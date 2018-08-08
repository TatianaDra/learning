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
    var sum=0;
    var SummExpectFirst=0;
var SummExpectSecond=0;
var SummExpectThird=0;
var SummExpectFourth=0;
var SummExpectFifth=0;
var min=0;
var max=0;
    for (var i=0; i<=arr.length; i++)
    {sum += arr[i]}
    SummExpectFirst=sum-arr[1];
    SummExpectSecond=sum-arr[2];
    SummExpectThird=sum-arr[3];
    SummExpectFourth=sum-arr[4];
    SummExpectFifth=sum-arr[5];
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

console.log(min);
console.log(max);
   

        
//return Number(min) + Number(max);


}

function main() {
    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
