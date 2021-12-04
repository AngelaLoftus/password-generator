//global variables defined including blank password and blank user choices to store selections
var lowerCaseLetters = ["abcdefghijklmnopqrstuvwxyz"]; 
var upperCaseLetters = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var numbers = ["0123456789"];
var characters = ["!@#$%&<>*^|~+"];
var userChoice = "";
var passwordLength = "";

//function to generate password
function generatePassword(){ 
  //reset user choice to empty string
  userChoice = "";
  var passwordLength = prompt("Please enter the number of characters you would like your password to be. Enter any number between 8 and 128.");
  //error handling for password length
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Invalid number of characters. You MUST enter a number between 8 and 128.");
    //call generate password until they have enough characters
    generatePassword();  
  } else {
  //else call all the user choice options
  console.log(passwordLength);
  selectLower();
  selectUpper();
  selectNumbers();
  selectCharacters();
  //error handling if there is no user choice
  if (!userChoice){
    alert("You must select at least one criterion to generate a password");
    //else call generate password until they pick something 
    generatePassword();
  }; 

  //generate random characters to create actual password
  var password = "";
  for (i = 0; i < passwordLength; i++) {
  var random = Math.floor(Math.random()*userChoice.length);
  password = password + userChoice.charAt(random);
}
//display the password text to the page
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  
};
};

//on click, call the generate password function to begin the prompts 
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", generatePassword);

//function calls to select user criteria (which characters they want)
//ask user if they want lower case letters
function selectLower(){
  var confirmLowerCase = confirm("Would you like to include lower case letters?");
  if (confirmLowerCase === true){
    userChoice = userChoice + lowerCaseLetters;
    console.log(userChoice);
    }
  };

  //ask user if they want upper case letters, if they do, add it to their choices
  function selectUpper(){
  var confirmUpperCase = confirm("Would you like to include upper case letters?");
  if (confirmUpperCase === true){
    userChoice = userChoice + upperCaseLetters;
    console.log(userChoice);
  }
}
//ask user if they want numbers. if they do, add it to their choices
function selectNumbers(){
  var confirmNumbers= confirm("would you like to include numbers?");
  if (confirmNumbers === true){
    userChoice = userChoice + numbers;
    console.log(userChoice);
  }
}

//ask user if they want special characters. if they do, add it to their choices
function selectCharacters(){
  var confirmCharacters = confirm("Would you like to include special characters?");
  if (confirmCharacters === true) {
    userChoice = userChoice + characters;
    console.log(userChoice);
  }
}




