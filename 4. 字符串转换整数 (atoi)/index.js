// https://leetcode-cn.com/problems/string-to-integer-atoi/

// 笨逼法
// const myAtoi = (str) => {
//     let index = 0, flag = '', res = 0
//     const number = /[0-9]/
//     const sign = /[+-]/
//     const inValid = /[^0-9]/
//     while (str[index] === ' ') {
//         index++
//     }
//     if (inValid.test(str[index]) && !sign.test(str[index])) return res
//     if (sign.test(str[index])) {
//         flag = str[index]
//         index++
//     }
//     while (number.test(str[index])) {
//         res = res * 10 + Number(str[index])
//         index++
//     }
//     if (flag === '-') res = -res
//     if (res > 0) {
//         return Math.min(Math.pow(2, 31) - 1, res)
//     } else {
//         return Math.max(-Math.pow(2, 31), res)
//     }
// }

// 自动机
const myAtoi = (str) => {
    const number = /[0-9]/
    let state = 'start', res = 0, sign = 1
    const table = {
        start: ['start', 'sign', 'isNumber', 'end'],
        sign: ['end', 'end', 'isNumber', 'end'],
        isNumber: ['end', 'end', 'isNumber', 'end'],
        end: ['end', 'end', 'end', 'end']
    }
    const getColNum = (c) => {
        if (c === ' ') return 0
        if (c === '+' || c === '-') return 1
        if (number.test(c)) return 2
        return 3
    }
    for (let i = 0; i < str.length; i++) {
        state = table[state][getColNum(str[i])]
        if (state === 'sign') {
            if (str[i] === '+') {
                sign = 1
            } else {
                sign = -1
            }
        }
        if (state === 'isNumber') {
            res = res * 10 + Number([str[i]])
        }
    }
    res = sign * res
    if (res > 0) {
        return Math.min(Math.pow(2, 31) - 1, res)
    } else {
        return Math.max(-Math.pow(2, 31), res)
    }
}