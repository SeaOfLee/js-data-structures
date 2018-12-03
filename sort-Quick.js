// Quick Sort

// Recursive
// Receive an array & pick "pivot"
// If item is less than pivot, put in left array, else into right array
// Return array resulting from quickSort called on left, the pivot, and quickSort on right

function quickSort(array) {
  console.log(array);
  // base case
  if (array.length < 2) {
    return array;
  }

  const pivotIdx = array.length - 1;
  const pivot = array[pivotIdx];
  const left = [];
  const right = [];

  for (let i = 0; i < pivotIdx; i++) {
    const currentItem = array[i];
    currentItem < pivot ? left.push(currentItem) : right.push(currentItem);
  }
  const result = [...quickSort(left), pivot, ...quickSort(right)];
  console.log(result);

  return result;
}

const numbers = [10, 6, 3, 2, 7, 9, 1, 8, 5, 4];

console.log(quickSort(numbers));
