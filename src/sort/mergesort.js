const merge = (left, right) => {
  const result = [];
  let il = 0;
  let ir = 0;

  while(il < left.length && ir < right.length) {
    if (left[il] < right[ir]) {
      result.push(left[il]);
      il += 1;
    }
    else {
      result.push(right[ir]);
      ir += 1;
    }
  }

  return result.concat(left.slice(il)).concat(right.slice(ir));
};

const mergeSort = (arr) => {
  if (arr.length < 2) return arr;

  const middleIndex = Math.floor(arr.length / 2);
  const left = arr.slice(0, middleIndex);
  const right = arr.slice(middleIndex);

  return merge(mergeSort(left), mergeSort(right));
};

export default mergeSort;