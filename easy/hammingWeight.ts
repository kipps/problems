function hammingWeight(n: number): number {
    const arr = n.toString(2).split('');
    return arr.filter(el => el === '1').length;
};

const result = hammingWeight(4294967293);
console.log(result);

