let arr1 = [3, 5, 4, 6, 5]
let sum = 9

function findPairEqualSum(arr, sum) {
    let complement = new Set()
    for (let i = 0; i < arr.length; i++) {
        if (complement.has(arr1[i])) {
            return true
        }
        complement.add(sum - arr1[i])
    }
    return false
}

const result = findPairEqualSum(arr1, sum)
result