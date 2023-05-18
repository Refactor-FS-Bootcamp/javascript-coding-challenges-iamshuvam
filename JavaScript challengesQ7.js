//7.	Create a function that will receive two arrays and will return an array with elements that are in the first array but not in the second array
var array1 = [2,8,9,6,74,6,8]
var array2 = [8,9,74,15]
function test(array1,array2){
    var output = array1.filter((i)=> array2.indexOf(i) < 0);
    return output
    }
console.log(test(array1,array2))

