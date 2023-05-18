//3.	Create a function that receives an array of numbers and returns an array containing only the positive numbers.

var array =[1,5,8,-7,-9,8]

function array_containin_only_the_positive_numbers(arr){
    var output = array.filter((x)=>x>0)
    return output;
}
console.log(array_containin_only_the_positive_numbers(array))