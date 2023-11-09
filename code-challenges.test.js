// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining items.

// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

// b) Create the function that makes the test pass.

// Pseudo code:

const shuffleArray = (array) => {
array.shift()
 const shuffle = array.sort(() => Math.random())
 return shuffle
}

const newColors = shuffleArray([...colors1])
const newColors2 = shuffleArray([...colors2])


// describe("shuffleArray", () => {
//     it("removes the first item from the array and shuffles the remaining items", () => {
//         expect(["purple", "blue", "green", "yellow", "pink"]).not.toEqual(expect.shuffleArray(newColors))
//         expect(["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]).toEqual(expect.shuffleArray(newColors))
    
//     })
// })

describe("shuffleArray", () => {
it("removes the first item from the array and shuffles the remaining items", () => {
expect(shuffleArray.length).toEqual(colors1.length - 1)
expect(shuffleArray.length).toEqual(colors2.length - 1)
    })
})





// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.

const votes1 = { upVotes: 13, downVotes: 2 }
// Expected output: 11
const votes2 = { upVotes: 2, downVotes: 33 }
// Expected output: -31

// b) Create the function that makes the test pass.

// Pseudo code:

// const tally = (count) => {
//     const votes = [upVotes,downVotes]
//     votes.map
//     return upVotes - downVotes
// }



// Function to calculate the end tally based on upVotes and downVotes
// const totalTally = (tally) => { 
// // subtract upVotes by downVotes
//     return tally.upVotes - tally.downVotes
// }


// // Jest test cases
// describe('totalTally', () => {
//     it('return total end tally', () => {
//   //  totalTally = upVotes - downVotes
//   //  expect("the difference"  = (votes1) = 11 => test to be true
//         expect(totalTally(votes1)).toEqual(11)
//   //  expect("the difference"  = (votes2) = -31 => test to be true
//         expect(totalTally(votes2)).toEqual(-31)
//     })
// })

