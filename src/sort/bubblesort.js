/**
 * Runtime: O(n^2) average and worst case. Memory: O(1)
 * @param {Array.<number>} arr
 * @returns Array.<number>
 */
export default (arr) => {
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = i; j > 0; j -= 1) {
      if (arr[j] < arr[j - 1]) {
        const temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      }
    }
  }

  return arr;
};
