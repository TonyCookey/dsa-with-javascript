const firstArray = ['a', 'b', 'z', 'd', 'l']
const secondArray = ['v', 'n', 'm', 'z', 'm']

function findCommonItems(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (firstArray[i] == secondArray[j]) {
                console.log("Found Common Item", firstArray[i])
                return true
            }
        }
    }
    return false
}
findCommonItems(firstArray, secondArray)
