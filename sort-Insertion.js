// Insertion sort

// Uses nested loops
// Assumes sorted list of length 1
// Compares next item, inserts it before or after depending on comparison

function insertionSort(arr) {
  let i;
  let j;

  for (i = 1; i < arr.length; i++) {
    for (j = 0; j < i; j++) {
      console.log(arr);
      if (arr[i] < arr[j]) {
        const [item] = arr.splice(i, 1);
        arr.splice(j, 0, item);
      }
    }
  }

  return arr;
}

const numbers = [10, 6, 2, 7, 2, 5, 9, 1];

console.log(insertionSort(numbers));
