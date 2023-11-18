var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numberCase = "0123456789"
var specialCase = "!@#$%&?"


// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {



  var passwordLength = Number(prompt("How many characters should your password have? Please pick between 8 and 128 characters."));
// If user pressed cancel, immediately ends function.
  if (!passwordLength) { 
    return;
  }
  else if (passwordLength < 8 || passwordLength > 128) {
// Checks to see if input is correct if not informs user incorrect status.
    passwordLength = prompt("Please enter a valid number!");
  };
// Next few lines of code takes user input and checks if they want Lowercase, Uppercase, Numbers, or Special Characters in their password
var hasLowerCase = confirm("Should the password include lowercase letters? If yes, hit OK, if not hit cancel")
var hasUpperCase = confirm("Should the password include UPPERcase letters? If yes, hit OK, if not hit cancel")
var hasNumbers = confirm("Should the password include numbers? If yes, hit OK, if not hit cancel")
var hasSpecials = confirm("Should the password include special characters? If yes, hit OK, if not hit cancel")

//Creates a random password using the user input cycling through if else statements confirming if any of the conditions were selected.
var getPassword = ""
if (hasLowerCase) {
  getPassword += lowerCase
}
else {
  hasLowercase = false
}
if (hasUpperCase) {
  getPassword += upperCase
}
else {
  hasUpperCase = false
}
if (hasNumbers) {
  getPassword += numberCase
}
else {
  hasNumbers = false
}
if (hasSpecials) {
  getPassword += specialCase
}
else {
  hasSpecials = false
};

var userPassword = ""
for (var i = 0; i < passwordLength; i++) {
  var randomIndex = Math.floor(Math.random() * getPassword.length)
  userPassword += getPassword.charAt(randomIndex)
};

return userPassword;

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
