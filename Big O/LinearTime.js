//How long algorithm to take an run - Time complexity
//How much memory it will need - Space complexity

//If combine those both it will be Big O notation

//O(n) - O of n

const groceries = ['Eggs', 'Milk', 'Chocolate', 'red horse', 'Sardines']

const searchItems = (item) => {
    for(let i = 0; i < groceries.length; i++) {
        if(groceries[i] === item) {
            console.log(`Item found: ${item}`)
        }
    }   
}
searchItems("Sardines")

//This is O of n - O(n)