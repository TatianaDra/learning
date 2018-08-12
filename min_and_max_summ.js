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
var mini=Number.POSITIVE_INFINITY;
var maxi=Number.POSITIVE_INFINITY;
    min=arr[0];
    max=arr[0];
    mini=0;
    maxi=0;
    
    
    for (var i=0; i<arr.length; i++)
    if (min>=arr[i])
   { min=arr[i];
   mini=arr[i]
   }
      else if (max<arr[i])
      {maxi=i;
    max=arr[i]}
  
     for (i=0 ; i<arr.length; i++)
     if (i!=mini && i!=maxi)
    min+=arr[i]
    else min=min;
        
    
     //max+=max[i]}
     //else 
     //{min=min;
     //max=max}
      
    
     
    
    
    
    
    
console.log(min, max)    
}

function main() {
    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
