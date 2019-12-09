// Queue of people
// Positions start at 1 and increment by 1

// One person can bribe at most two others, so if a person is in a position of >2 ahead of their denoted position, they're out of bounds. 
    // In this case, the function should return the string "Too chaotic"

// Return the minimum number of bribes needed to create a given queue of people

function minimumBribes(q) {
    let min_bribes = 0
    let holder = []

    // Iterate over the loop in reverse order
    for (let i = q.length - 1; i >= 0; i--) {
        if (q[i] - [i+1] > 2) {
                    return "Too chaotic"
            // console.log("Too chaotic")
        }

        // Start at (val of q[i]) - 2 and go until you've reached the current location
        for (let j = q[i] - 2; j < i; j++) {
            // console.log(j)
            if (q[j] > q[i]) {
                // console.log(q[j], "is larger than ", q[i])
                min_bribes++
            }
        }

        // // Iterate over holder. See if there's values that are smaller 
        // for (let rightVal = 0; rightVal < holder.length; rightVal++) {
        //     // console.log(rightVal)
        //     // console.log(holder)
        //     if (holder[rightVal] < q[i]) {
        //         // console.log(holder[rightVal])
        //         // console.log("is larger than")
        //         // console.log(q[i])
        //         min_bribes += 1
        //     }
        // }

        // holder.unshift(q[i])
    }

        // let largerThanCounter = 0
        // iterate over val in holder
            // if evaulated value to the right > q[i]
                // largerThanCounter += 1

        // Store val in holder unshift()


    // for (let i = 0; i < q.length; i++) {
    //     if (q[i] - [i+1] > 2) {
    //         return "Too chaotic"
    //         // console.log("Too chaotic")
    //     }

    //     // If lower value succeeds a higher value, dont do anything
    //     if (q[i] > i+1) {
    //         min_bribes += q[i] - (i+1)
    //     }
    // }

    return min_bribes
}

// console.log(minimumBribes([2, 1, 5, 3, 4]))
// 3
// console.log(minimumBribes([2, 5, 1, 3, 4]))
// Too chaotic
// console.log(minimumBribes([5, 1, 2, 3, 7, 8, 6, 4]))
// Too chaotic
console.log(minimumBribes([1, 2, 5, 3, 7, 8, 6, 4]))
// 7
// console.log(minimumBribes([1, 2, 5, 3, 4, 7, 8, 6]))
// 4