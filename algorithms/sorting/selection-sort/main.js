const numbers = [99, 44, 6, 2, 1, 283, 4, 0];

function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let minNumber = array[i]

        for (let j = i + 1; j < array.length; j++) {
            if (minNumber > array[j]) {
                minNumber = array[j]
                index = j
            }
        }
        if (minNumber != array[i]) {
            let holding = array[i]
            array[i] = minNumber
            array[index] = holding
        }

    }
    return array
}

const result = selectionSort(numbers);
result