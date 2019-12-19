//  A value in the Set may only occur once; it is unique in the Set's collection.
// NaN and undefined can also be stored in a Set. All NaN values are equated 
// (i.e. NaN is considered the same as NaN, even though NaN !== NaN).
const arr = [
    // It removes duplicate numbers
    1, 1, 2, 2, 3, 3, 
    // It removes duplicate strings
    "test", "test", "John", 
    // It removes duplicate instances of Booleans
    true, true,
    // It does not remove duplicate objects, even when their k/v pairs are the same
    {"name": "Richard"}, {"name": "Richard"},
    // Nor does it remove identical arrays
    [1, 2, 3], [1, 2, 3],
]

const set1 = new Set(arr)

// console.log(arr)
console.log(set1)
