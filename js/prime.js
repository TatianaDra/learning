function isPrime(n) {
    for (i = 2; i <= Math.round(Math.sqrt(n)) + 1; i++) {
        if (n % i == 0) {
            return 'not prime';
        }
    }
    return 'prime';
}

console.log('number 121 is ' + isPrime(121));
console.log('number 11 is ' + isPrime(11))