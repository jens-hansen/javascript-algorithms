/**
 * Runtime: O(n^2) average and worst case. Memory: O(1)
 * @param {Array.<number>} arr
 * @returns Array.<number>
 */
export default (arr) => {
  for (let i = 0; i < arr.length -1 ; i += 1) {
    let minVal = arr[i];
    let index = i;
    for(let j = i + 1; j < arr.length; j +=1 ) {
      if (arr[j] < minVal) {
        minVal = arr[j];
        index = j;
      }
    }
    const temp = arr[i];
    arr[i] = minVal;
    arr[index] = temp;
  }
  return arr;
};