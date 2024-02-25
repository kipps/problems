function longestCommonPrefix(strs: string[]): string {
    const sorted = strs.sort((a,b) => a.length - b.length);
    let prefix = sorted[0][0] || ''; 
    let coincidence = sorted.filter(el => el.startsWith(prefix)).length;
    let whileStop = true;
    let attempt = 0;

    if (!prefix) return '';
    if (sorted[0].length == 1) {
        return sorted.length > 1 && sorted.length > coincidence ? '' : prefix;
    }
    
    while (whileStop) {
        coincidence = sorted.filter(el => el.startsWith(prefix)).length;
        
        
        if(!sorted[0][attempt + 1]) {
            whileStop = false;
            return sorted.length > coincidence ? prefix.slice(0, -1) : prefix;
        } 
        
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

const res = longestCommonPrefix(["ab", "a"]);
console.log({res});
