// //O(1) constant time
// const input1 = [10, 20, 30, 40, 50];
//Function: Retrieve the first element of an array.
// //Expected output 10

// const retrieveElement = (num, index) => num[index] 
// console.log(retrieveElement(input1, 0))



// //O(n) - Linear Time
// const input2 = [1, 2, 3, 4, 5];
//Function: Find the sum of all elements in an array.
// //Expected output 15

// let result = 0;

// const sumNumbers = (input) => {
//     for(let i = 0; i < input.length; i++) {
//         result += input[i]
//     } 
//     console.log(result)
// }

// sumNumbers(input2)


// O(n²) - Quadratic Time
const input3 = [1, 2, 3, 4, 5, 6]; 
const target = 7;

//Function: Find all pairs of numbers in an array that add up to a given target.

/**
 * Expected output
 [
  [1, 6],
  [2, 5],
  [3, 4]
]
 */


const findTarget = (input, target) => {
    let pairs = []

    for(let i = 0; i < input.length; i++) {
        for(let j = i + 1; j < input.length; j++) {
            if(input[i] + input[j] === target) {
                pairs.push([input[i], input[j]])
            }
        }
    }
    return pairs
}

console.log(findTarget(input3, target))