/**
 * Returns the contents of the orignal array divided into N equally sized arrays.
 * Where the size of the original array cannot be divided equally by N,
 * the final part will have a length equal to the remainder.
 *
 * @param array {Array} array to split which will HAVE a length >= 0
 * @param chunk_size {Integer} a positive integer
 */

const groupArrayElements = (array, chunk_size) => {
  const groups = [];

  let maxElementsInEachArrayGroup = array.length % chunk_size;
  if (maxElementsInEachArrayGroup <= 0) {
    maxElementsInEachArrayGroup = chunk_size;
  }

  while (array.length) {
    const group = array.splice(0, maxElementsInEachArrayGroup);
    groups.push(group);
  }
  return groups;
};

// USAGE
const result = groupArrayElements([1, 2, 3, 4, 5], 3);
console.log(result);
// Outputs : [ [1,2] , [3,4] ,[5] ]
