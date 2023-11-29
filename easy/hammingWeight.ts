function hammingWeight(n: number): number {
    const arr = n.toString(2).split('');
    return arr.filter(el => el === '1').length;
};

// function hammingWeight(n: number): number {
//     let count = 0
//     for(let i =0; i < 32; i++){
//         if((n & 1) === 1){
//             count++
//         }
//         n >>= 1
//     }
//     return count
// };

const result = hammingWeight(4294967293);
console.log(result);

