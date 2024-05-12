/** product: calculate the product of an array of numbers. */

function product(nums) {
  if(nums.length === 0) return 1;
  
  return nums[0] * product(nums.slice(1))
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, idx = 0, large = '') {
  if(words.length === idx) return large.length;

  if(words[idx].length > large.length){
    large = words[idx];
  }

  return longest(words, idx + 1, large);
}

/** everyOther: return a string with every other letter. */

function everyOther(str, idx = 0, evenLtr = '') {
  if(str.length === idx) return evenLtr;

  if(idx % 2 === 0){
    return everyOther(str, idx + 1, evenLtr + str[idx])
  }else {
    return everyOther(str, idx + 1, evenLtr)
  }
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, idx = str.length - 1, reversed = '') {
  if(idx === -1) return reversed === str;

  reversed += str[idx]

  return isPalindrome(str, idx - 1, reversed)
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx = 0) {
  if(idx === arr.length) return -1;

  if(arr[idx] === val){
    return idx
  } else{
    return findIndex(arr, val, idx + 1)
  }
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, idx = str.length, reverse = '') {
  if(idx === 0) return reverse;

  reverse += str[idx - 1]

  return revString(str, idx - 1, reverse)
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj, val = []) {
  for(k in obj){
    if(typeof obj[k] === 'string'){
      val.push(obj[k])
    }else if(typeof obj[k] === 'object'){
      gatherStrings(obj[k], val)
    }
  }
  return val
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, idx = Math.floor(arr.length / 2), leftIdx = 0, rightIdx = (arr.length - 1)) {
  if(rightIdx < leftIdx && val !== arr[idx]) return -1;

  if(val === arr[idx]){
    return idx
  }else if(val < arr[idx]){
    rightIdx = idx - 1
    return binarySearch(arr, val, idx = Math.floor((rightIdx + leftIdx) / 2), leftIdx, rightIdx)
  }else{
    leftIdx = idx + 1
    return binarySearch(arr, val, idx = Math.floor((rightIdx + leftIdx) / 2), leftIdx, rightIdx)
  }
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
