//Given an array of integers, calculate the fractions of its elements that are positive, negative, and are zeros. 
//Print the decimal value of each fraction on a new line.
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


function plusMinus(arr) {
    var pk = 0;
    var zk = 0;
    var nk = 0;
for(var i = 0; i <= arr.length; i++){
    if (arr[i]>0)
        {pk++;
        }
    else if (arr[i]<0)
        {nk++;
        }
    else if (arr[i]==0) {zk++;
         }
    }
    pk = pk/arr.length;
    nk = nk/arr.length;
    zk = zk/arr.length;
    console.log(pk);
    console.log(nk);
    console.log(zk);
    }




function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
