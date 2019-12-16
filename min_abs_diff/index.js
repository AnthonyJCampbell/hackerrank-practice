// Given an array of integers, find the smallest difference possible between two of the integers in the array, as seen when drawing a direct line between the two

// Return that integer

// Example: given [2, -2, 4], the results would be:
//      2 - (-2) = 4
//      4 - 2 = 2
//      (-2) - 4 = 6
// 

// function minimumAbsoluteDifference(arr) {
//     let smallest_diff = Math.abs(arr[0] - arr[1])

//     // Loop over every item in the array while i < arr.length - 1
//     for (let i = 0; i < arr.length - 1; i++) {
//         // Loop over the rest of the array
//         for (let j = i + 1; j < arr.length; j++) {
//             let distance = Math.abs(arr[i] - arr[j])
//             if (Math.abs(distance) < smallest_diff) smallest_diff = distance
//         }
//     }

//     return smallest_diff
    
// }

function minimumAbsoluteDifference(arr) {
    arr.sort((a,b) => a-b)

    let smallest_diff = Infinity
    for (let i = 1; i < arr.length; i++) {
        let prev = arr[i - 1]
        let current = arr[i]
        let diff = Math.abs(prev - current)
        smallest_diff = Math.min(diff, smallest_diff)
    }

    return smallest_diff
    
}

console.log(minimumAbsoluteDifference([-59, -36, -13, 1, -53, -92, -2, -96, -54, 75]))
