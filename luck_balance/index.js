// Complete the luckBalance function below.
function luckBalance(k, contests) {
    let balance = 0
    let nImportantGames = 0

    // Loop over arrays in contests
    for (const array in contests) {
        balance += contests[array][0]
        if (contests[array][1] == 1) {
            nImportantGames += 1
        }
    }

    let nAllowedWins = nImportantGames - k

    // find (nAllowedWins) smallest values for contests[array][0]
    const arr = []

    for (const value in contests) {
        if (arr.length < nAllowedWins) {
            arr.push(contests[value][0])
            continue
        }
        // push to arr
        if (contests[value][1] == 1) {

            arr.push(contests[value][0])
            // sort arr
            arr.sort((a,b) => a-b)
            // Remove right-most value (thereby making the arr length of nAllowedWins)
            arr.pop()
        }
    }

    // After loop completes, loop over arr and subtract value from balance
    for (const value in arr) {
        balance -= arr[value] * 2
    }

    //  It should return an integer that represents the maximum luck balance achievable.
    return balance
}

console.log(luckBalance(3, [[5, 1],
    [2, 1],
    [1, 1],
    [8, 1],
    [10, 0],
    [5, 0]]))

function altLuckBalance(k, contests) {
    const importantContest = contests.filter(item => item[1] === 1)
    const importantContestByLuckAsc = importantContest.sort((a, b) => a[0] - b[0])
    const unimportantContest = contests.filter(item => item[1] === 0)

    const importantContestByLuckAscToWin = importantContestByLuckAsc
        .splice(0, importantContest.length - k)
 
    const importantContestByLuckAscToLoose = importantContestByLuckAsc;
    
    const sumLuck = (sum, item) => sum + item[0];
    
    const sumImportantLuckToLoose = importantContestByLuckAscToWin.reduce(sumLuck, 0)
    const sumImportantLuckToGain = importantContestByLuckAscToLoose.reduce(sumLuck, 0)
    const sumUnimportantLuckToGain = unimportantContest.reduce(sumLuck, 0)

    return (sumImportantLuckToGain + sumUnimportantLuckToGain) - sumImportantLuckToLoose    
}
