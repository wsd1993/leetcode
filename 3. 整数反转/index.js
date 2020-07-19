// https://leetcode-cn.com/problems/reverse-integer/

const reverse = (x) => {
    let rev = 0
    
    while (Math.abs(x) > 0) {
        const pop = x % 10
        x = parseInt(x / 10)
        if (rev * 10 + pop < -Math.pow(2, 31) || rev * 10 + pop >= Math.pow(2, 31)) {
            return 0
        } else {
            rev = rev * 10 + pop
        }
    }
    return rev
}
