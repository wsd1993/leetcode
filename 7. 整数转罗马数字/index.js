// https://leetcode-cn.com/problems/integer-to-roman/

/**
 * I             1
 * V             5
 * X             10
 * L             50
 * C             100
 * D             500
 * M             1000
*/

// 贪心算法
// const intToRoman = (num) => {
//     const romanMap = {
//         [1000]: 'M',
//         [900]: 'CM',
//         [500]: 'D',
//         [400]: 'CD',
//         [100]: 'C',
//         [90]: 'XC',
//         [10]: 'X',
//         [9]: 'IX',
//         [5]: 'V',
//         [4]: 'IV',
//         [1]: 'I'
//     }
    
//     const keys = Array.prototype.map.call(Object.keys(romanMap), (i) => Number(i));
    
// }

// 硬编码
const THOUSANDS = 'thousands';
const HUNDREDS = 'hundreds';
const TENS = 'tens';
const ONES = 'ones';

const intToRoman = (num) => {
    const romanCodeMap ={
        [THOUSANDS]: [
            '', 'M', 'MM', 'MMM'
        ],
        [HUNDREDS]: [
            '', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'
        ],
        [TENS]: [
            '', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'
        ],
        [ONES]: [
            '', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'
        ]
    }

    let res = ''

    const thousand = Math.floor(num / 1000);
    const hundred = Math.floor((num % 1000) / 100);
    const ten = Math.floor((num % 100) / 10);
    const one = num % 10;

    res = romanCodeMap[THOUSANDS][thousand] + romanCodeMap[HUNDREDS][hundred] + romanCodeMap[TENS][ten] + romanCodeMap[ONES][one];
    return res;
}