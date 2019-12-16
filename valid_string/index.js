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
        hash[s[letter]] == undefined ? hash[s[letter]] = 1 : hash[s[letter]] += 1
    }

    // console.log(hash)

    // After storing everything in the ht, we'll need to check the value to see if they're all the same (or within 1)
    let values = Object.values(hash).sort()
    let n_differences = 0
    let prev = 0

    // Can we store it in a hash table?

    // console.log(values)

    for (let i in values) {
        



        let value = values[i]
        if (i == 0) {
            prev = value
            continue
        }

        // console.log(`${value} - ${prev} = ${value - prev}`)

        if (prev !== value && value - prev == 1) {
            n_differences += 1
        }
        // console.log(n_differences)
        if (value - prev > 1 || n_differences > 1) {
            return "NO"
        }
        prev = value
    }
    
    return "YES"


}

console.log(isValid("aabbcd"))