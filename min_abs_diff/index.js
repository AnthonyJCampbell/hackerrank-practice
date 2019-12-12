// Given an array of integers, find the smallest difference possible between two of the integers in the array, as seen when drawing a direct line between the two

// Return that integer

// Example: given [2, -2, 4], the results would be:
//      2 - (-2) = 4
//      4 - 2 = 2
//      (-2) - 4 = 6
// 

function minimumAbsoluteDifference(arr) {
    let smallest_diff = Math.abs(arr[0] - arr[1])

    // Loop over every item in the array while i < arr.length - 1
    for (let i = 0; i < arr.length - 1; i++) {
        // Loop over the rest of the array
        for (let j = i + 1; j < arr.length; j++) {
            let distance = Math.abs(arr[i] - arr[j])
            if (Math.abs(distance) < smallest_diff) smallest_diff = distance
        }
    }

    return smallest_diff
    
}
console.log(minimumAbsoluteDifference([-59, -36, -13, 1, -53, -92, -2, -96, -54, 75]))
// console.log(Math.abs(-54 - -53))
// -53
// -54
// console.log(pairs[33])
// console.log(Math.abs(pairs[33][0] % Infinity) + Math.abs(pairs[33][1] % Infinity))
// console.log(pairs[26][0] - pairs[26][1])