//4.	Rotate an array to the left 1position.

var array = [1,2,3,4,5,6]
function rotateLeft(arr){
    let first = arr.shift();
    arr.push(first);
    return arr;
}
console.log(rotateLeft());