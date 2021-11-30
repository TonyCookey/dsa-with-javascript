let arr1 = [3, 5, 4, 6, 5]
let sum = 9

function findPairEqualSum(arr, sum) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr1[i] + arr1[j] == sum) {
                return true
            }
        }
    }
    return false
}

const result = findPairEqualSum(arr1, sum)
result