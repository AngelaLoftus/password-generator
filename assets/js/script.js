 // Assignment code here
var password = "";
var lowerCaseLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]; 
var upperCaseLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var characters = ["!","@","#","$","%","&","(",")", "<",">","*","^","|"];
var userChoice = "";


//pick random number to assign characters 
//Math.floor(Math.random()) 

function getLowerCase () {
    return lowerCaseLetters[Math.floor(Math.random()*lowerCaseLetters.length)];
};
function getUpperCase (){
    return upperCaseLetters[Math.floor(Math.random()* upperCaseLetters.length)];
};
function getNumbers() {
  return numbers[Math.floor(Math.random() * numbers.length)];
};
function getCharacters() {
  return characters[Math.floor(Math.random()*characters.length)];
};
var generatePassword = function() {
  Math.floor(Math.random * passwordLength.length);
}

var passwordLength = parseInt(prompt("Please enter the number of characters you would like your password to be. Enter a number between 8 and 128."));

console.log(passwordLength);

if (passwordLength < 8 || passwordLength > 128) {
  prompt("Invalid number of characters. Enter a number between 8 and 128.")
}



//function call select user criteria
//ask user if they want lower case letters
var confirmLowerCase = confirm("Would you like lower case letters?");
function selectLower(){
    if (confirmLowerCase === true){
      userChoice = userChoice + lowerCaseLetters;
      console.log(userChoice);
    }
};

//ask user if they want upper case letters
var confirmUpperCase = confirm("Would you like upper case letters?");
function selectUpper(){
  if (confirmUpperCase === true){
    userChoice = userChoice + upperCaseLetters;
    console.log(userChoice);
  }
}
//ask user if they want numbers
var confirmNumbers= confirm("would you like numbers?");
function selectNumbers(){
  if (confirmNumbers === true){
    userChoice = userChoice + numbers;
    console.log(userChoice);
  }
}

//ask user if they want special characters
var confirmCharacters = confirm("Would you like special characters?");
function selectSpecial(){
  if (confirmCharacters === true) {
    userChoice = userChoice + characters;
    console.log(userChoice);
  }
}

//make sure user selects at least one option
if (!confirmLowerCase && !confirmUpperCase && !confirmNumbers && !confirmCharacters) {
  alert("You must select at least one of the password criteria to generate a password.")
};


var generatePassword   

// if (confirmLowerCase) {
//   password += Math.floor(Math.random()*lowerCaseLetters.length);
// }
// if (confirmUpperCase) {
//   password += Math.floor(Math.random()* upperCaseLetters.length);
// }
// if (confirmNumbers) {
//   password += Math.floor(Math.random()*numbers.length);
// }
// if (confirmCharacters) {
//   password += Math.floor(Math.random()*characters.length);
// }


for (i = 0; i < passwordLength.length; i++) {
  var password = "";
  

}



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
