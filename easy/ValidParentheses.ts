function isValid(s: string): any {
    if(s.length % 2 != 0) return false;

    enum BracketsList {
        OPEN_SQ = '[',
        CLOSE_SQ = ']',
        OPEN_FIG = '{',
        CLOSE_FIG = '}',
        OPEN_CIR = '(',
        CLOSE_CIR = ')',
    }

    const groups = s.match(/.{1,2}/g) ?? [];
  
    const result = groups.map(group => {
        switch(group[0]) {
            case BracketsList.OPEN_CIR: 
                return group[1] === BracketsList.CLOSE_CIR;
            case BracketsList.OPEN_FIG:
                return group[1] === BracketsList.CLOSE_FIG;    
            case BracketsList.OPEN_SQ:
                return group[1] === BracketsList.CLOSE_SQ;  
            default: return false;      
        }
    });

    return !result.some(item => !item);
};

const res = isValid('[]{}()()');

// console.log(res)


const brackets: {[key: string]: string} = {
    ']': '[',
    '}': '{',
    ')': '(' 
  }
  
  function isValid2(s: string): boolean {
    const stack: string[] = []
    const chars = s.split('')
  
    for (const char of chars) {
      if (isClosing(char)) {
        const opening = stack.pop()
  
        if (brackets[char] !== opening) { return false }
      } else { stack.push(char) }
    }
  
    return stack.length === 0
  }
  
  function isClosing(s: string): boolean {
    return brackets.hasOwnProperty(s)
  }

  console.log(isValid2('{{[]}}'));
  