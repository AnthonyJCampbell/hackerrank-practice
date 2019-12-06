function alternatingCharacters(s) {
    let deletions = 0

    // transform str into arr
    const arr = s.split("")

    // Check if character to the right is the same
        // If so, it should be deleted
        // We should look one further
    let currentChar = arr[0]
    let rightChar = arr[1]
    let idx = 1

    while (idx < arr.length) {
        if (rightChar !== currentChar) {
            console.log("we're good!")
            currentChar = rightChar
            idx += 1
            rightChar = arr[idx]
        } else {
            idx +=1
            if (arr[idx]) {
                rightChar = arr[idx]
            }

            deletions += 1
        }
    }
    
    // Go until character to the right != current character
        // If so, turn character to the right into current character
        // character to the right = current character + 1
   

    return deletions

}

// console.log(alternatingCharacters("AAAA"))
// console.log(alternatingCharacters("BBBBB"))
// console.log(alternatingCharacters("ABABABAB"))
// console.log(alternatingCharacters("BABABA"))
console.log(alternatingCharacters("AAABBB"))





