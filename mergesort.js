function split(arr) {
  return [arr.slice(0, arr.length / 2), arr.slice(arr.length / 2)];
}

function merge(arr1, arr2){
  var mergedArray = [];
  while(arr1.length && arr2.length){
    if (arr1[0] < arr2[0]){
      mergedArray.push(arr1.shift());
    }
    else {
      mergedArray.push(arr2.shift());
    }
  }

  mergedArray = mergedArray.concat(arr1).concat(arr2);

  return mergedArray;
}

function mergeSort (arr){
  var sortedArray = [];
  if (arr.length === 1){
    return arr;
  }
  let splitArray = split(arr),
  left = splitArray[0],
  right = splitArray[1];

  sortedArray = merge(mergeSort(left),mergeSort(right));

  return sortedArray;
}
