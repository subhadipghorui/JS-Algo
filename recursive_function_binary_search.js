/************************************ */
// Normal Search with Linear complexity
console.log('Binary Search');

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9];

function findMe(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
}
//console.log(findMe(arr, 3));

/************************************ */
// Binay Search 0log2n complexity
const arr2 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];
let i = 0;
function binarySearch(target, array, start, end) {
  console.log('Iteration :' + i);
  i++;
  // Stop the loop at end index 6 > 6 is false
  if (start > end) {
    return 'Not Found';
  }

  const middle = Math.floor((start + end) / 2);
  if (arr2[middle] === target) {
    return `Found it at index ${middle}`;
  }

  if (arr2[middle] > target) {
    return binarySearch(target, array, start, middle - 1); // search left
  }

  if (arr2[middle] < target) {
    return binarySearch(target, array, middle + 1, end); // search right
  }
}

console.log(binarySearch('g', arr2, 0, arr2.length));
