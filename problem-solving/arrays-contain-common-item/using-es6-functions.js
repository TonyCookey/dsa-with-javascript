const firstArray = ['a', 'b', 'z', 'd', 'l']
const secondArray = ['v', 'n', 'm', 'z', 'm']

function findCommonItems(arr1, arr2) {
    return arr1.some(item => arr2.includes(item))
}
const result = findCommonItems(firstArray, secondArray)
result