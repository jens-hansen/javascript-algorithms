/**
 * Runtime: O(n^2) average and worst case. Memory: O(1)
 * @param {Array.<number>} arr
 * @returns Array.<number>
 */
export default (arr) => {
  for (let i = 0; i < arr.length; i += 1) {
    const x = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > x) {
      arr[j + 1] = arr[j];
      j -= 1;
    }
    arr[j + 1] = x;
  }
  return arr;
};
