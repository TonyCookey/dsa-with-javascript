
function fibonacciRecursive(n) {
    if (n <= 2) {
        return 1
    }
    let sum = fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2)
    console.log(sum);
    return sum
}

function fibonacciIterative(n) {
    let next
    let prev = 0
    let current = 1
    let index = 1

    while (n > index) {
        next = current + prev
        prev = current
        current = next
        index++
    }
    return current
}
function fibonacciIterativeArray(n) {
    let arr = [0, 1]
    for (let index = 2; index <= n; index++) {
        arr.push(arr[index - 2] + arr[index - 1])
    }
    return arr[n]
}
const result = fibonacciIterativeArray(9)
result