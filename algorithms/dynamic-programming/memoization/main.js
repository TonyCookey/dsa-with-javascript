function addTo80(n) {
    return n + 80
}

let cache = {}

function memoizedAddTo80(n) {
    if (n in cache) {
        console.log('from cache');
        return cache[n]
    }
    cache[n] = n + 80
    return cache[n]
}

const result = memoizedAddTo80(10)
result
const result2 = memoizedAddTo80(10)
result2
const result3 = memoizedAddTo80(20)
result3