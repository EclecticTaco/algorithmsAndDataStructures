const getDigit = (num, place) => {
  return  Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

const digitCount = (num) => {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

const mostDigits = (nums) => {
  let max = 0;
  nums.forEach((num) => {
    let temp = digitCount(num);
    if (temp > max) max = temp;
  })
  return max;
}

const radixSort = (nums) => {
  let maxDigitCount = mostDigits(nums);

  for (let k = 0; k < maxDigitCount; k += 1) {
    let digitBuckets = Array.from( {length: 10}, () => [])
    for (let i = 0; i < nums.length; i += 1) {
      let digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }
    nums = [].concat(...digitBuckets);
  }
  return nums;
}

console.log(radixSort([3052,3,234,53,22,1,45764,85,40]))