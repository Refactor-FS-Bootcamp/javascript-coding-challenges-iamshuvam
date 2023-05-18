//1.	Calculate the sum of odd numbers greater than 10 and less than 30.

var sum =0;
var n=10;
while(n<=30){
    if(n%2!=0){
        sum = sum+n;
    } 
    n++
}
console.log(sum)