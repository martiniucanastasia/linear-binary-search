// 1. Create start/end points, which will +/- every time by themselves.
// 2. Compare the target element with the middle element of the array.
// 3. If the target element is found, its index is returned.
// 4. If the target element is greater than the middle element, then the search continues in the right half.
// 5. Else if the target element is less than the middle value, the search continues in the left half.
// 6. This process is repeated until the middle element is equal to the target element, or the target element is not in the array.
// 7. If the target element is not found -1 (or false) is returned.

const { numbers } = require("./numbers");

const binarySearch = (array, target) => {
  let start = 0;
  let end = array.length - 1;
  let iterations = 0;

  while (start <= end) {
    iterations++;
    let middle = Math.floor((start + end) / 2);
    if (array[middle] === target) {
      return {
        found: true,
        iterations,
      };
    } else if (array[middle] < target) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }
  return {
    found: false,
    iterations,
  };
};

console.log(binarySearch(numbers, 15));
