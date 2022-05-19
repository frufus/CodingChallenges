/**
 * Task: Given an array of intervals, merge the overlapping intervals, and return an array of the resulting intervals.
 * @see https://buttondown.email/cassidoo/archive/the-creation-of-a-thousand-forests-is-in-one/
 * @param inputArray
 */
// doesn't get multiple overlaps
const mergeIntervals = (inputArray: Array<number[]>) => {
  inputArray.sort((a, b) => a[0] - b[0]);
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i + 1] && inputArray[i][1] >= inputArray[i + 1][0]) {
      inputArray[i][1] = inputArray[i + 1][1];
      inputArray.splice(i + 1, 1);
    }
  }
  return inputArray;
};

export default mergeIntervals;
