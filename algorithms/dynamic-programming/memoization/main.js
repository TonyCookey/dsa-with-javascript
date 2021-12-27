function addTo80(n) {
    return n + 80
}


function memoizedAddTo80(n) {
    let cache = {}
    return function name(params) {
        if (n in cache) {
            console.log('from cache');
            return cache[n]
        }
        cache[n] = n + 80
        return cache[n]
    }
}

const memoized = memoizedAddTo80(10)
const result = memoized()
result
const result2 = memoized()
result
