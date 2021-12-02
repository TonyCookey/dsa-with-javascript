// Reverse a string 

function reverseString(randomString) {
    // Convert string to array using string.split()
    // Time Complexity: O(n)
    randomStringArray = randomString.split(' ')
    let resultArray = []
    for (let i = randomStringArray.length - 1; i >= 0; i--) {
        resultArray.push(randomStringArray[i])
    }
    return resultArray
}
const randomString = 'My name is Tony Cookey'
const result = reverseString(randomString)
result