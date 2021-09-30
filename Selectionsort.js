const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
  
  for(let i = 0 ; i < array.length ; i++){
      let min = i;
    for(let j = i+1 ; j < array.length ; j++){
        if(array[j] < smallest){
          min = j;
        }
    }
    let temp = array[i]; // to store the current value
    array[i] = array[min];
    array[min] = temp;
    
  }
  return array;
  
}

selectionSort(numbers);
console.log(numbers)

// first loop is to take the ith element and check that with each next element using second loop which starts from the i+1th element and store which is the smallest and then swap the smallest with the first element of array.

// Now as the first element is swaped and sorted we will do start with second in first loop and 3rd element in second loop and then check the min and swap the smallest with the second element that is the ith element and carry on until array is sorted.