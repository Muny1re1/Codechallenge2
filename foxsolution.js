//creating a function to swap the case to the opposite.
function swapCase(str) {
    let result = "";
    //making a conditional expression to swap the chase.
      /*splitting the string components to apply the map method.*/   str.split("").map(function(letter){
                if (letter === letter.toUpperCase()){
                    result += letter.toLowerCase();
                } else if (letter === letter.toLowerCase()){
                    result += letter.toUpperCase();
                } else {
                    result += letter;
                }
            }
        ).join("");/*joining back the elements.*/
        return result;
}
console.log(swapCase("The Quick Brown Fox"));