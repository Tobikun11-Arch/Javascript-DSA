//O(n^2) term


//Finding pair using Quadratic time which in function we have 2 loops

function findPair(numbers) {
    for(let i = 0; i < numbers.length; i++) {
        for(let j = i + 1; j < numbers.length; j++) {
            console.log(`First found: ${numbers[i]} and the 2nd ${numbers[j]}`)
        }
    }
}

const numbers = [1, 2, 3, 4, 5, 6, 6]
findPair(numbers)