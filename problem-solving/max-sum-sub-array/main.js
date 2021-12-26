const input = [-2, 1, -3, 4, -1, 2, 1, -5, 4]

function maxSumSubArray(arr) {
    let maxSum = arr[0]
    let sum = arr[0]

    for (let i = 1; i < arr.length; i++) {
        if (sum < 0) {
            sum = arr[i]
        }
        else {
            sum = sum + arr[i]
        }
        if (maxSum < sum) {
            maxSum = sum
        }
    }
    return maxSum

}

const result = maxSumSubArray(input);
result