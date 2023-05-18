//5.	Reverse an array.

var array = [1,2,3,4,5,6,7,8,9]
console.log(array)
i= 0;
j= array.length-1
while(i<j){
    //swap
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;

    //update i and j
    i++;  
    j--;  
  }
  console.log(array);