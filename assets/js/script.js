 // Assignment code here
 //global variables defined including blank password and blank user choices to store selections

var lowerCaseLetters = ["abcdefghijklmnopqrstuvwxyz"]; 
var upperCaseLetters = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var numbers = ["0123456789"];
var characters = ["!@#$%&<>*^|~+"];
var userChoice = "";
var passwordLength = "";


//ask user how many characters they want. If outside of range, ask user to try again
 
var passwordLength = prompt("Please enter the number of characters you would like your password to be. Enter any number between 8 and 128.");
console.log(passwordLength);
if (passwordLength < 8 || passwordLength > 128) {
  prompt("Invalid number of characters. You MUST enter a number between 8 and 128.");  
}


//figure out which characters the user wants then run the forLoop to select random characters
function generatePassword(){ 
  selectLower();
  selectUpper();
  selectNumbers();
  selectCharacters();

  return forLoopRandom();

};

//function calls to select user criteria (which characters they want)

//ask user if they want lower case letters
var confirmLowerCase = confirm("Would you like to include lower case letters?");
function selectLower(){
  if (confirmLowerCase === true){
    userChoice = userChoice + lowerCaseLetters;
    console.log(userChoice);
    }
  };

  //ask user if they want upper case letters, if they do, add it to their choices
  var confirmUpperCase = confirm("Would you like to include upper case letters?");
function selectUpper(){
  if (confirmUpperCase === true){
    userChoice = userChoice + upperCaseLetters;
    console.log(userChoice);
  }
}
//ask user if they want numbers. if they do, add it to their choices
var confirmNumbers= confirm("would you like to include numbers?");
function selectNumbers(){
  if (confirmNumbers === true){
    userChoice = userChoice + numbers;
    console.log(userChoice);
  }
}

//ask user if they want special characters. if they do, add it to their choices
var confirmCharacters = confirm("Would you like to include special characters?");
function selectCharacters(){
  if (confirmCharacters === true) {
    userChoice = userChoice + characters;
    console.log(userChoice);
  }
}

//make sure user selects at least one option. If they have not, alert them that they must choose something.
if (!confirmLowerCase && !confirmUpperCase && !confirmNumbers && !confirmCharacters) {
  alert("You must select at least one of the password criteria to generate a password.")
};

//iterate throught the userChoice array to assign random character to each spot based on user preferences
function forLoopRandom(){
  var password = "";
for (i = 0; i < passwordLength; i++) {
  var random = Math.floor(Math.random()*userChoice.length);
  password = password + userChoice.charAt(random);
}
return password;
};



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
