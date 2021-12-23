const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(numbers) {
    // bubble sort algorthm in 0(n^2)- quadratic time
    for (let i = 0; i < numbers.length; i++) {
        let start = numbers[0];
        let next
        for (let j = 1; j < numbers.length; j++) {
            next = numbers[j]
            if (start > next) {
                numbers[j - 1] = next
                numbers[j] = start
            }
            else {
                start = numbers[j]
            }

        }
    }
}

bubbleSort(numbers);
console.log(numbers);