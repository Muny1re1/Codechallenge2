//creating a function that generates an array with the inputs of the first number and the secomd.
function generateArray(num1, num2){
let result = [];
//creating a conditionals and a for loop for each number.
 if( num1 <= num2){
    for(let i= num1; i<= num2; i++){
        result.push(i);
    }
 } else {
    for(let i= num1; i>= num2; i--){
        result.push(i);
    }
 }
 return result;
}
console.log(generateArray(-4, 7))