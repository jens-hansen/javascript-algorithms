export default (sort) => {
  return [
    {
      name: 'that it sorts an empty array',
      fn: () => {
        const testArr = [];
        expect(sort(testArr)).toEqual([]);
      },
    },
    {
      name: 'that it sorts a given array',
      fn: () => {
        const testArr = [3, 4, 12, 1, 3, 66, 4, 123, 5];
        const expectedArr = [1, 3, 3, 4, 4, 5, 12, 66, 123];

        expect(sort(testArr)).toEqual(expectedArr);
      }
    },
    {
      name: 'that it sorts an array with negative numbers',
      fn: () => {
        const testArr = [-1, -4, 3, -10];
        const expectedArr = [-10, -4, -1, 3];

        expect(sort(testArr)).toEqual(expectedArr);
      }
    }
  ]
}