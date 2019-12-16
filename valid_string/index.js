// All characters must appear an equal number of times.
// Optionally, a string can be valid if the removal of a single string can balance the string

// If it's valid, return "YES". Else, "NO"

// The easiest way to store the data would be in a hash table

function isValid(s) {
    // Loop over string, store each value in the hash table
    const hash = {}

    for (let letter in s) {
        // Store s[letter] in hash table
        // if s[letter] is in hash table, increment value by one
        // If not, set it to 1
    }

    // After storing everything in the ht, we'll need to check the value to see if they're all the same (or within 1)

    // Check if all values are the same or if they're all the same except for one
    // let same_frequency = []
    // let within_one = []

    // Loop over ht


    return true
}

console.log(isValid("aabbcd"))