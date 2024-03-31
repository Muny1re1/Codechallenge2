 const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]//defining an array of numbers.
 //define a function that chooses the prime numbers.
function PrimeNumbers(num){
    if(num <= 1) return false;//creating a condition that compares the values to one.
    if(num <= 3) return true;// creating a condition that compares the values to three.
    //creating a conditional to compare the remaineders of the values when divided by either two or three.
    if(num % 2 === 0 || num % 3 === 0) return false;
    let i= 5//creating a condition to compare the divisibility of the squares of the values.
    while(i*i <= num){
        if(num % i === 0 || num % (i+2) === 0) return false;
        i += 6
    }
    return true;
}
// calling a function to filter prime numbers from an array.
function filterPrimeNumbers (arr){
    return arr.filter(PrimeNumbers);
}
//printing the result of the function.
console.log(filterPrimeNumbers(numbers));
