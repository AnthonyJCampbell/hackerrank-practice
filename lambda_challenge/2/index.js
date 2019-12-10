function balancedBrackets(string) {
    // input can contain [], {}, () and ||

    // First
    // Check if there's an even number of instances of each character.
    // Use a hash table for this

    // In addition, the sequence of brackets has to be mirrored
    // i.e. ({[]}) and not ([)]
    // Use a stack for this
        // For every opening bracket we run into, add it to the stack.
        // If we run into a closing bracket, see if it's on top of the stack and remove it
            // If it isn't there, the string isn't balanced, so we should immediately return false
    // If we've reached the end of the string and the stack is empty, return true

    // return a BOOLEAN that indicates if input string is balanced.
}