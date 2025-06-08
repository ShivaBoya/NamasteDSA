
function countDigits(n) {
  if (n === 0) return 1;
  n = Math.abs(n);
  let count = 0;
  while (n > 0) {
    n = Math.floor(n / 10);
    count++;
  }
  return count;
}

console.log(countDigits(259)); 
    


var isPalindrome = function(x) {
  if (x < 0) return false;
  let xCopy = x;
  let rev = 0;
  while (x > 0) {
    let rem = x % 10;
    rev = rev * 10 + rem;
    x = Math.floor(x / 10);
  }
  return rev === xCopy;
};

console.log(isPalindrome(121));

var reverse = function(y) {
  let yCopy = y;
  x = Math.abs(y);
  let rev = 0;
  while (y > 0) {
    let last = y % 10;
    rev = rev * 10 + last;
    y = Math.floor(y / 10);
  }
  if (rev > 2**31 - 1) return 0;
  return yCopy < 0 ? -rev : rev;
};

console.log(reverse(123))