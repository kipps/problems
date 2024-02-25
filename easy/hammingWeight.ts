function hammingWeight(n: number): number {
    const arr = n.toString(2).split('');
    return arr.filter(el => el === '1').length;
};

console.log(hammingWeight(4294967293));

