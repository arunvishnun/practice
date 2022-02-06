function climbinsStairs (n) {
	if (n === 0 ) {
        return 1;
    }
	if (n <= 2) {
        return n;
    }

	return climbinsStairs(n-1) + climbinsStairs(n-2);
}


function climbinsStairsDP(n) {
    let dp = [];
    dp[0] = 1;
    dp[1] = 1;

    for (let i = 2; i<=n; i++) {
        dp[i] = dp[i-1] + dp[i-2];
    }

    return dp[n]
}

console.log(climbinsStairsDP(5))

