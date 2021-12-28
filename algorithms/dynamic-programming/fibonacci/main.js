let calculations = 0
function fibonacciMaster() { //O(n)
    let cache = {};
    return function fib(n) {
        calculations++;
        if (n in cache) {
            return cache[n];
        } else {
            if (n < 2) {
                return n;
            } else {
                cache[n] = fib(n - 1) + fib(n - 2);
                return cache[n];
            }
        }
    }
}
function fibonacciBottomsUp(n) {
    let sequence = [0, 1]
    for (let i = 2; i <= n; i++) {
        sequence.push((sequence[i - 2] + sequence[i - 1]))
    }
    return sequence.pop()
}
const result = fibonacciBottomsUp(10)
result
