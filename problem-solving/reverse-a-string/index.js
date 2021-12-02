// Reverse a string 

function reverseString(randomString, sep) {
    // Convert string to array using string.split()
    // Time Complexity: O(n)
    if (!randomString || typeof randomString !== 'string') {
        return 'Invalid Input'
    }

    randomStringArray = randomString.split(sep)
    let resultArray = []
    for (let i = randomStringArray.length - 1; i >= 0; i--) {
        resultArray.push(randomStringArray[i])
    }
    return resultArray.join(sep)
}
// using the built in reverse() and join() methods
const reverseStringUsingReverse = str => str.split('').reverse().join('')

// suing the ES6 syntax and the spread operator
const reverseStringUsingES6 = str => [...str].reverse().join('')

const randomString = 'My name is Tony Cookey'
const result = reverseString(randomString, '')
const result2 = reverseStringUsingReverse(randomString)
const result3 = reverseStringUsingES6(randomString)
result
result2
result3