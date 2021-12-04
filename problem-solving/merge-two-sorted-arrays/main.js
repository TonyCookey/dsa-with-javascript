let arr2 = [23, 45, 67, 90]
let arr1 = [2, 3, 5, 7, 8, 9]

function mergeTwoSortedArrays(arr1, arr2) {
    console.log(typeof arr2);
    if (typeof arr2 != 'object' || typeof arr1 != 'object') {
        console.log('invalid input');
    }
    let mergeArray = arr1.concat(arr2)
    mergeArray.sort(function (a, b) {
        return a - b;
    })
    return mergeArray
}

let result = mergeTwoSortedArrays(arr1, arr2)
result