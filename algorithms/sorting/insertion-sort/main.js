const numbers = [99, 44, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
        console.log(array[array.length]);
        if (array[i] > array[i + 1]) {
            let holding = array[i]
            array[i] = array[i + 1]
            array[i + 1] = holding
            for (let j = i; j > 0; j--) {
                if (array[j] < array[j - 1]) {
                    holding = array[j]
                    array[j] = array[j - 1]
                    array[j - 1] = holding
                }
            }
        }
    }
    return array
}

const result = insertionSort(numbers);
result