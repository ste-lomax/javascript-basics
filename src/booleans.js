const negate = (a) => {
  if (a) {
    return false;
  } 
  else return true;
};

const both = (a, b) => {
  return (a) && (b);
};

const either = (a, b) => {
  return (a) || (b);
};

const none = (a, b) => {
  if (a && b) {
    return false;  
  } else if (a || b) {
    return false;
  } else return true;
};

const one = (a, b) => {
  if (a && b) {
    return false;  
  } else if (!a && !b) {
    return false;
  } else return true;
};

const truthiness = (a) => {
  if (a) {
    return true;
  } else return false;
};

const isEqual = (a, b) => {
  return a === b;
};

const isGreaterThan = (a, b) => {
  return a > b;
};

const isLessThanOrEqualTo = (a, b) => {
  return a <= b;
};

const isOdd = (a) => {
  return a % 2 === 1;
};

const isEven = (a) => {
  return a % 2 === 0;
};

const isSquare = (a) => {
  return Math.sqrt(a) % 1 === 0;
};

function startsWith(char, string) {
  // your code here
};

function containsVowels(string) {
  // your code here
};

function isLowerCase(string) {
  // your code here
};

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};
