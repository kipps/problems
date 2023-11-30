function longestCommonPrefix(strs: string[]): string {
    const sorted = strs.sort((a,b) => a.length - b.length);
    let prefix = sorted[0][0] || ''; 
    let whileStop = true;
    let attempt = 0;

    while (whileStop) {
        const coincidence = sorted.filter(el => el.includes(prefix)).length;
        
        if(sorted.length === coincidence) {
            prefix = prefix + sorted[0][attempt + 1];
            attempt +=1;
        } else {
            prefix = prefix.slice(0, -1);
            whileStop = false; 
        }
    }
    
    return prefix;
};

const res = longestCommonPrefix(["flower","flow","flight"]);
console.log(res);
