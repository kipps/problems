function romanToInt(s: string): number {
    const arr = s.split('');
    return arr.reduce((acc, curr, i, old) => {
        let value = 0;
        switch (curr) {
            case 'L': 
                value = 50; 
                break;
            case 'V': 
                value = old[i - 1] === 'I' ? 0 : 5; 
                break;  
            case 'X': 
                value = old[i - 1] === 'I' ? 0 : 10; 
                break;        
            case 'I':
                value = old[i + 1] !== 'V' ? 1 : 4;
                break;
            default:
                break;
        }

        return acc + value;
    }, 0);
};

console.log(romanToInt('LIV'));

