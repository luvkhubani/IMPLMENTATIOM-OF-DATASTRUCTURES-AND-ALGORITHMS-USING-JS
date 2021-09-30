function recurringcheck(arr){
  const table1 = { } // an hash table is created to insert the numbers we have checked and have not repeated till yet.

  for(let i = 0 ; i< arr.length ; i++){
    key = arr[i];
    if(table1[key] !== undefined)// checking if already we are having the number saved in our table or not.
    {
      return key;
    } 
    else
    {
      table1[key] = i; // as the key value pair is not there so saving it like 1:1 and 2:2
    }
  }
  return undefined
}

recurringcheck([1,2,3])