
function findFactorialUsingRecursion(x) {
    if (x < 1) {
        return 1
    }
    return x * findFactorialUsingRecursion(x - 1)

}

function findFactorialUsingIteration(x) {
    let sum = 1
    while (x > 1) {
        sum = sum * x
        x--
    }
    return sum
}
