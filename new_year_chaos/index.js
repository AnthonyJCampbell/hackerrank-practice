// Queue of people
// Positions start at 1 and increment by 1

// One person can bribe at most two others, so if a person is in a position of >2 ahead of their denoted position, they're out of bounds. 
    // In this case, the function should return the string "Too chaotic"

// Return the minimum number of bribes needed to create a given queue of people

function minimumBribes(q) {


}
console.log(minimumBribes([2, 1, 5, 3, 4]))
// 3
// console.log(minimumBribes([2, 5, 1, 3, 4]))
// // Too chaotic
// console.log(minimumBribes([5, 1, 2, 3, 7, 8, 6, 4]))
// // Too chaotic
// console.log(minimumBribes([1, 2, 5, 3, 7, 8, 6, 4]))
// // 7
// console.log(minimumBribes([1, 2, 5, 3, 4, 7, 8, 6]))
// // 4