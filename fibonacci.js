function factorialOfNumber(num) {
    var factorial = 1;

    function fibonacci(n) {
        var fib = [0, 1];

        for (i = 2; i < n + 1; i++) {

            fib[i] = fib[i - 1] + fib[i - 2];
        }
        return fib[n];
    }

    console.log(fibonacci(10));