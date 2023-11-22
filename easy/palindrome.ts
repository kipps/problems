const isPalindrome = (x: number) => x.toString() === x.toString().split('').reverse().join('');
console.log(isPalindrome(142241));
