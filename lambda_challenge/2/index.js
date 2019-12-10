function balancedBrackets(string) {
    // input can contain [], {}, () and ||
    const stack = []
    
    for (let i = 0; i < string.length; i++) {
        const char = string[i]
        // console.log(char)
        
        // For every opening bracket we run into, add it to the stack.
        // If we run into a closing bracket, see if it's on top of the stack and remove it
            // If it isn't there, the string isn't balanced, so we should immediately return false
    // If we've reached the end of the string and the stack is empty, return true
        
        // Regular case
        if (char == "[" || char == "{" || char == "(") {
            stack.push(char)
        }

        // In case of |
        if (char == "|") {
            // If so, remove it
            if (stack[stack.length - 1] == "|") {
                stack.pop()
            // If not, add it to the stack
            } else {
                stack.push(char)
            }
        }
        
        if (char == "]" && stack[stack.length - 1] == "[") {
            stack.pop()
        }

        else if (char == "}" && stack[stack.length - 1] == "{") {
            stack.pop()
        }

        else if (char == ")" && stack[stack.length - 1] == "(") {
            stack.pop()
        }
        // If none of the previous three were true, the stack is unbalanced so we should return false
        else if (char == "]" || char == "}" || char == ")") {
                return false
        }
        // console.log(stack)
    }
    
    // return a BOOLEAN that indicates if input string is balanced.
    if (stack.length == 0) {
        return true
    }
}

console.log(balancedBrackets("I (wa)n{t to buy a on}esie[…] b(u{[t] kno}w it) won’t suit me."))