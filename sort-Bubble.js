// Bubble Sort

// Loop through array
// If this item > next item, swap them
// Indicate a swap occurred
// If swap occurred, loop through the array again
// Continue looping until no swaps occur

function bubbleSort(arr) {
  let swapped = false;
  do {
    swapped = false;

    arr.forEach((item, idx) => {
      if (item > arr[idx + 1]) {
        const temp = item;
        arr[idx] = arr[idx + 1];
        arr[idx + 1] = temp;
        swapped = true;
        console.log(arr);
      }
    });
  } while (swapped);

  return arr;
}

const numbers = [10, 6, 2, 7, 2, 5, 9, 1];

console.log(bubbleSort(numbers));
