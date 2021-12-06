const input = [2, 3, 5, 6, 8, 9, 1, 3]

function findfirstRecurringCharacter(arr) {
    let uniqueCharacterStore = {

    }
    for (let i = 0; i < arr.length; i++) {
        if (uniqueCharacterStore[arr[i]]) {
            return arr[i]
        };
        uniqueCharacterStore[arr[i]] = true
    }
    return undefined
}
console.log(findfirstRecurringCharacter(input));