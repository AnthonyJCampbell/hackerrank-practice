function maximumToys(prices, k) {
    const sortedArr = prices.sort((a,b) => a-b)

    let cumulativeCost = 0;
    let n = 0

    for (let i = 0; i < sortedArr.length; i++) {
        if (cumulativeCost > k) {
            return n-1;
        } else {
            cumulativeCost += sortedArr[i]
            n += 1
        }
    }
}

console.log(maximumToys([1, 12, 5, 111, 200, 1000, 10], 50))