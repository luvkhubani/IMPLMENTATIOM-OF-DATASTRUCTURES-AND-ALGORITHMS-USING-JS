// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8
function fibonacciIterativebuffer(n){
if(n < 2){
  return n;
}
const array = [0,1];
for(let i = 2; i <= n ; i++){
  array.push(array[i-1]+ array[i-2]);
}
return array[n];

}

function fibonacciIterative(n){
  // sum  = prev "a" + prevthenthat "b" 
  // this is an approach without buffer.
  let a = 0;
  let b = 1;
  let sum = 0;
  if(n < 2 ){
    return n;
  }

  for(let i = 0 ; i <= n-2 ; i++){
    sum = a + b;
    a = b;
    b = sum;
  }
  return sum;
}

fibonacciIterative(3);

function fibonacciRecursive(n) {
  if(n < 2){
    return n;
  }
  return fibonacciRecursive(n-1) + fibonacciRecursive(n-2)
}

fibonacciRecursive(8);

fibonacciIterativebuffer(6);

