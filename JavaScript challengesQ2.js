//2.	Calculate the average of the numbers in an array of numbers

var array = [1,2,3,4,5,6,7,8,9]
var output = array.reduce((acc,curr)=>acc= acc+curr,0)
console.log(output/array.length);