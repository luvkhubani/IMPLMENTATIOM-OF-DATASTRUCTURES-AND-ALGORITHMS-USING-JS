function findFactorialRecursive(number) {
  //recursive
  if(number === 0 || number === 1){
      return 1;
  }

  return number * findFactorialRecursive(number-1);
}

function findFactorialIterative(number) {
  //loop
  let answer = 1;
  if(number === 0 || number === 1){
    return 1;
  }
  for(let i = 1 ; i <= number ; i++){
    answer = answer*i;
  }

  return answer;
}

findFactorialRecursive(5);