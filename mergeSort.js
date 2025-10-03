const merge = (arr1, arr2) => {
  let i = 0;
  let j = 0;
  let k = 0;
  const res = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      res[k++] = arr1[i++];
    } else {
      res[k++] = arr2[j++];
    }
  }

  for (; i < arr1.length; i++) {
    res[k++] = arr1[i];
  }

  for (; j < arr2.length; j++) {
    res[k++] = arr2[j];
  }

  return res;
};

const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const leftArray = mergeSort(arr.slice(0, mid));
  const rightArray = mergeSort(arr.slice(mid));
  return merge(leftArray, rightArray);
};
