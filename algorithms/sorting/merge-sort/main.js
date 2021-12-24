const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]
const test = [9, 2, 3]

function mergeSort(array) {
    // base case
    if (array.length === 1) {
        return array
    }

    // Split Array in into right and left
    let div = Math.floor(array.length / 2)
    const left = array.slice(0, div)
    const right = array.slice(div)


    return merge(
        mergeSort(left),
        mergeSort(right)
    )
}

function merge(left, right) {

    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length &&
        rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++
        }
    }
    // console.log(left, right)
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}


const result = mergeSort(numbers);
result