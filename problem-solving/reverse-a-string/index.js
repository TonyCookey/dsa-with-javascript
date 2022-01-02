// Reverse a string using Iteration
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
function reverseStringInPlace(s) {
    let temp
    let j = s.length - 1
    for (let i = 0; i < j; i++) {
        temp = s[i]
        s[i] = s[j]
        s[j] = temp
        j--
    }

}

// using Recursion Approach 1
function reverseStringRecursion(str) {
    if (str.length == 1) {
        return str[0]
    }
    splitStr = str.split('')

    return splitStr.pop() + reverseStringRecursion(splitStr.join(''))
}

// using Recursion Approach 2
function reverseStringRecursive(str) {
    if (str === "") {
        return "";
    } else {
        return reverseStringRecursive(str.substr(1)) + str.charAt(0);
    }
}


// using the built in reverse() and join() methods
const reverseStringUsingReverse = str => str.split('').reverse().join('')


// suing the ES6 syntax and the spread operator
const reverseStringUsingES6 = str => [...str].reverse().join('')
