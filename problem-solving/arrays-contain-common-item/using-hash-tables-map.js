const firstArray = ['a', 'b', 'z', 'd', 'l']
const secondArray = ['v', 'n', 'm', 'z', 'm']

function findCommonItems(arr1, arr2) {
    let map = {}
    for (let i = 0; i < arr1.length; i++) {
        if (!map[arr1[i]]) {
            map[arr1[i]] = true
        }
    }
    for (let j = 0; j < arr2.length; j++) {
        if (map[arr2[j]]) {
            return true
        }
    }
    return false

}
const result = findCommonItems(firstArray, secondArray)
result