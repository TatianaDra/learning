function dividerOfNumber(n) {
    for (i = 1; i <= n; i++) {
        if (n % i == 0)
            console.log(i);
    }
}


dividerOfNumber(979)