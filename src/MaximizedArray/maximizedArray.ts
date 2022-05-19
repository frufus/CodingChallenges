/**
 * Task: Given two integer arrays of size n, return a new array of size n such that n consists of only unique elements and the sum of all its elements is maximum.
 * @see https://buttondown.email/cassidoo/archive/i-think-its-just-as-important-what-you-say-no-to/
 * @param array1
 * @param array2
 */
const maximizedArray = (array1: number[], array2: number[]) => {
  const result = [...new Set([...array1, ...array2])].sort((a,b) => a - b);
  return result.slice(array1.length * -1);
};

export default maximizedArray;
