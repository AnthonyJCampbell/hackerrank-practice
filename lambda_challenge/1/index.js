function fibonacci(n) {
    // Simplest way to do it must be iteratively
    // Declare current and next

    const return_arr = []
    let current = 0
    let next = 1

    // Iterate over n
    for (let i = 0; i < n; i++) {
        // For every step, add current to return_arr
        return_arr.push(current)
        // Store next
        const holder = current
        // Current becomes next
        current = next
        // Next becomes current + next
        next = current + holder
    }
    return return_arr
}

console.log(fibonacci(13))