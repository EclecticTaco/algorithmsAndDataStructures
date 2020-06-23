const merge = (arr1, arr2) => {
  /* 
   create empty array, look at the smallest values
  while there are values we havnet looked at 

  if val in the first array is smaller than val in second array, push val from first array into results
  move onto next val in first array

  if val in first array is larger than val in 2nd array, pusl val in second array into results, move onto next val in second array

  once one array is done, push all remaning vales from other array
  */

  let i = 0;
  let j = 0;
  let result = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      result.push(arr1[i]);
      i += 1;
    } else {
      result.push(arr2[j]);
      j += 1;
    }
  }
  while (i < arr1.length) {
    result.push(arr1[i]);
    i += 1;
  } 
  while (j < arr2.length) {
    result.push(arr2[j]);
    j += 1;
  }
  return result;
}


const mergeSort = (array) => {
  if (array.length <= 1) {
    return array
  }

  let mid = Math.floor(array.length / 2);
  let left = mergeSort(array.slice(0, mid));
  let right = mergeSort(array.slice(mid));
  return merge(left,right)
  
}

console.log(mergeSort([10,1,20,5]))