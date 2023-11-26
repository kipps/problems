type RomansTypes = {[key: string]: number};

const romans: RomansTypes = {
    I: 1, 
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
}

function romanToInt(s: string): number {
    const numbers = s.split('').map((v) => romans[v as keyof RomansTypes]);
    return numbers.reduce((acc, curr, i) => {
        // console.log(curr < numbers[i + 1] ?? 0, {acc, curr});
        return curr < numbers[i + 1] ?? 0 ? acc - curr : acc + curr
    }, 0);
}

console.log(romanToInt('LVIII'));
console.log(romanToInt('MCMXCIV'));