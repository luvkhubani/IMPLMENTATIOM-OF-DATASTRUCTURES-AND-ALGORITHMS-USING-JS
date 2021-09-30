const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {

  for(let i = 0 ; i< array.length; i++){
      for(let j = 0 ; j < array.length ; j++){
        let tempholder = 0;
        if(array[j] > array[j+1]){
          tempholder =  array[j];
          array[j] =  array[j+1];
          array[j+1] = tempholder;
        }
      }
  }
}

bubbleSort(numbers);
console.log(numbers);

// first loop is to do bubble up the times we have no. of elements.

// second loop is to bubble each element to top by comparing the adjacent pairs using array[j] and array[j+1].