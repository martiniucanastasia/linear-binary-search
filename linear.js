// 1. Start with the first position and compare it to the target in order to search for a target element.
// 2. If the current element matches the target element, return the position of the current element. (or true)
// 3. If not, move on to the next one until we reach the very end of an array.
// 4. If still unable to find the target, return -1. (or false)

const { numbers } = require("./numbers");

const linearSearch = (array, target) => {
  let iterations = 0;
  for (let i = 0; i < array.length; i++) {
    iterations++;
    if (array[i] === target) {
      return {
        found: true,
        iterations,
      };
    }
  }
  return {
    found: false,
    iterations,
  };
};

console.log(linearSearch(numbers, 15))