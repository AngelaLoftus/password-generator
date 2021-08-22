// Assignment code here

varLowerCaseLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]; 
varUpperCaseLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
varNumbers = ["0","1","2","3","4","5","6","7","8","9"];
varCharacters = ["!","@","#","$","%","&","(",")", "<",">","*","^","|"];



var numberChars = prompt("Please enter the number of characters you would like your password to be. Enter a number between 8 and 128.");

if (numberChars < 8 || numberChars >128) {
  prompt("Invalid number of characters. Enter a number between 8 and 128."
  )
}





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
