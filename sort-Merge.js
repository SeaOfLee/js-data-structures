// Merge Sort

// Divides array into two halves
// Calls mergeSort on these sub arrays
// Once we get to arrys less than 2 in length, stitch them together
// Sort as we stitch them up, leading to our sorted array when we're all the way up the stack

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const sorted = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      sorted.push(left.shift());
    } else {
      sorted.push(right.shift());
    }
  }
  const results = [...sorted, ...left, ...right];

  console.log(results);
  return results;
}

mergeSort([10, 8, 2, 3, 8, 9, 1]);
