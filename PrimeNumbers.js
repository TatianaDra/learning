function PrimeNumbers(num) {
     for (var i = 2; i < num; i++) {
        if(num%i==0)
            return false;
    }
    return true;
}
for(var i = 1; i < 100; i++){
    if(PrimeNumbers(i)) console.log(i);
}