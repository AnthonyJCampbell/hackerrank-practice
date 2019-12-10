function threeNumberSum(arr, target) {
    // The function accepts following parameters:
    // *  1. INTEGER_ARRAY arr
    // *  2. INTEGER target

    // Account for duplicates in the array
    const return_arr = []

    // Loop over the arr - 2, to account for the possibility of the last two values being the otehr desired ones
    for (let i = 0; i < arr.length - 1; i++) {
        // Find all pairs with sum "-arr[i]"
        const cache = {}

        for (let j = i + 1; j <= arr.length; j++) {
            const possible_third = target - (arr[i] + arr[j])
            // console.log(possible_third)
            // console.log(cache)
            if (possible_third in cache) {
                // console.log("Weve found an array with", [arr[i], arr[j], possible_third])
                let nested_arr = [arr[i], arr[j], possible_third]
                nested_arr.sort((a,b) => a-b)

                return_arr.push(nested_arr)
            } else {
                cache[arr[j]] = arr[j]
            }
        }
    }

    if (return_arr.length == 0) {
        return return_arr
    }

    // Sort based on first item in sub-array
    let sorted_arr = []
    return_arr.sort((index => {
        return (first_arr, second_arr) => {
            return (first_arr[index] == second_arr[index] ? 
            0 
                : 
            (first_arr[index] < second_arr[index] ? 
                -1 
                : 
                1
            ));
        };
    })(0))
    
    // Sort based on second item in teh subarray
    return_arr.sort((index => {
        return (first_arr, second_arr) => {
            return (first_arr[index -1] == second_arr[index-1] ? 
            // Here, we should go look into the second level
            // This signifies the [0] of each is equal
            (first_arr[index] < second_arr[index] ?
                -1
                :
                1
            )
                : 
            
            (first_arr[index -1] < second_arr[index-1] ? 
                -1 
                : 
                1
            ));
        };
    })(1))





        // Iterate over the rest of the array
        // for (let j = i+1; j < arr.length; j++) {
        //     // We want to figure out if there's anything that's equal to target - arr[i]
        //     let third_int = arr[j]
        //     let second_int = desired_sum - arr[j]

        //     // if first, second or third == 0
        //         // and if two out of three is the opposite

        //     if (first_int == 0 || second_int == 0 || third_int == 0) {
        //         1 & 2, 2& 3 or 3&!

        //     }

        //     if (cache[second_int]) {
        //         // We've found a match
        //         // Create arr and push to nested_arr
        //         let nested_arr = [first_int, cache[second_int], third_int]
        //         nested_arr.sort((a,b) => a-b)

        //         return_arr.push(nested_arr)
        //     }
        //     // add arr[j] to hash table
        //     cache[arr[j]] = arr[j]
        // } 



                
            

    
    // Find all triples in the array that sum up to the target sum
        // Store these in an array, sorted from smallest to largest
        // Add array to 2d_arr, sorted accordingly

        // If no triplets can be found, return an empty array

    // return a 2D_INTEGER_ARRAY
    return return_arr
}