// All characters must appear an equal number of times.
// Optionally, a string can be valid if the removal of a single string can balance the string

// If it's valid, return "YES". Else, "NO"

// The easiest way to store the data would be in a hash table

// Complete the isValid function below.
function isValid(s) {
    // Loop over string, store each value in the hash table
    const hash = {}

    for (let letter in s) {
        // Store s[letter] in hash table
        // if s[letter] is in hash table, increment value by one
        // If not, set it to 1
        hash[s[letter]] == undefined ? hash[s[letter]] = 1 : hash[s[letter]] += 1
    }
    // After storing everything in the ht, we'll need to check the value to see if they're all the same (or within 1)
    let values = Object.values(hash).sort()

    const store = {}

    for (let i in values) {
        let value = values[i]
        store[value] ? store[value] += 1 : store[value] = 1
    }

    let store_vals = Object.values(store).sort((a, b) => a - b)

    // String is not balanced if it has:
    // More strings that occur in three different amounts
    // If strings occur in two different amounts but the frequency is off by more than one.
    // The difference between [0] & [1] should be 0 or 1.
    if (store_vals.length > 2 || store_vals[0] > 1) {
        return "NO"
    } else if (store_vals[0] == 1 || store_vals[1] == undefined) {
        return "YES"
    } else {
        return "NO"
    }
}

// Solution from HackerRank
function alt_isValid(s) {
    var hashTable = {};

    s.trim().split('').map(a => (a in hashTable ? hashTable[a]++ : hashTable[a] = 1));

    var letters = Object.keys(hashTable).map(key => hashTable[key]).sort((a, b) => a - b);

    var firstValue = letters[0];
    var secondValue = letters[1];
    var secondToLastValue = letters[letters.length - 2];
    var lastValue = letters[letters.length - 1];

    if (letters.length === 1 ||
        firstValue === lastValue ||
        (secondValue === lastValue &&
            (firstValue === (lastValue - 1) ||
                firstValue === 1)) ||
        (firstValue === (lastValue - 1) &&
            firstValue === secondToLastValue)) {

        return 'YES';

    } else {

        return 'NO';
    }
}



console.log(isValid("abcdefghhgfedecba"))