
function fibonacciRecursive(n) {
    if (n <= 2) {
        return 1
    }
    let sum = fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2)
    console.log(sum);
    return sum
}

function fibonacciIterative(params) {

}