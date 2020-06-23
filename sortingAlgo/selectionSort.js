/* 
  store first ele as smallest value 
    loop
      loop again
        compare num to smallest val
          if num is smaller, set to new smallest
          swap values
      repeat
*/

const selectionSort = (array) => {
  for (let i = 0; i < array.length; i += 1) {
    let smallest = i;
    for (let x = i + 1; x < array.length; x += 1) {
      if (array[x] < array[smallest]) {
        smallest = x
      }
    } 
    let temp = array[i];
    array[i] = array[smallest];
    array[smallest] = temp;
  }
  return array;
}

console.log(selectionSort([6,4,3,1]))