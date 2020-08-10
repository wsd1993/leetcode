// https://leetcode-cn.com/problems/regular-expression-matching/
// 动态规划
const isMatch = (s, p) => {
    if (s === null || p === null) false
    const sLen = s.length, pLen = p.length
    const dp = new Array(sLen + 1)
    for (let i = 0; i < dp.length; i++) {
        dp[i] = new Array(pLen + 1).fill(false)
    }
    dp[0][0] = true
    for (let i = 1; i < pLen + 1; i++) {
        if (p[i - 1] === '*') dp[0][i] = dp[0][i - 2]
    }
    for (let i = 1; i < sLen + 1; i++) {
        for (let j = 1; j < pLen + 1; j++) {
            if (s[i - 1] === p[j - 1] || p[j - 1] === '.') {
                dp[i][j] = dp[i - 1][j - 1]
            } else if (p[j - 1] === '*') {
                if (s[i - 1] === p[j - 2] || p[j - 2] === '.') {
                    dp[i][j] = dp[i][j - 2] || dp[i - 1][j] || dp[i - 1][j - 2]
                } else {
                    dp[i][j] = dp[i][j - 2]
                }
            }
        }
    }
    return dp[sLen][pLen]
}