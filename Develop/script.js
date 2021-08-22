// Assignment code here

varLowerCaseLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]; 
varUpperCaseLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
varNumbers = ["0","1","2","3","4","5","6","7","8","9"];
varCharacters = ["!","@","#","$","%","&","(",")", "<",">","*","^","|"];

//pick random number to assign characters 
//Math.floor(Math.random()) 

var numberChars = prompt("Please enter the number of characters you would like your password to be. Enter a number between 8 and 128.");

if (numberChars < 8 || numberChars >128) {
  prompt("Invalid number of characters. Enter a number between 8 and 128.")
}

// else generatePassword(numberChars) 

//function call select user criteria
//ask user if they want lower case letters
var confirmLowerCase = confirm("Would you like lower case letters?");

//ask user if they want upper case letters
var confirmUpperCase = confirm("Would you like upper case letters?");

//ask user if they want numbers
var confirmNumbers= confirm("would you like numbers?");

//ask user if they want special characters
var confirmCharacters = confirm("Would you like special characters?");

//make sure user selects at least one option
alert("You must select at least one of the password criteria to generate a password.")

//possible combinations
//upper, lower, number, char, upper + lower, upper + number, upper + char, lower+ number, lower + char, number + 


//call the prompt again
//if (confirmLowerCase === false && confirmUpperCase === false && confirmNumbers === false && confirmCharacters=== false) {alert(You must select a criterion. Try again.)}
//else call the generateFunction
 
 
















// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
