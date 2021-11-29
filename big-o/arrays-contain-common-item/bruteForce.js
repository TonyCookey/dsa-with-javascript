const firstArray = ['a', 'b', 'z', 'd', 'l']
const secondArray = ['v', 'n', 'm', 'z', 'm']

for (let i = 0; i < firstArray.length; i++) {
    for (let j = 0; j < secondArray.length; j++) {
        if (firstArray[i] == secondArray[j]) {
            console.log("Found Common Item", firstArray[i])
        }
    }
}
