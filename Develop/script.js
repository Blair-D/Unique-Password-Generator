// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz"
var numbers = "0123456789"
var specialCharacters ="!@#$%^&*()_-+=,.<>~`:;[]{}'"



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var numofcharacters = prompt("How many characters long would you like your password to be?")
  if (numofcharacters < 8 || numofcharacters > 128) {
    alert("Passwords must be between 8 and 128 character long");
  } else if (isNaN(numofcharacters)) {
    alert("Please choose a number");
  } else {
     
    var passwordChar = [];

    var addupperCase = confirm("Would you like to include uppercase in your password?");
    var addlowerCase = confirm("Would you like to include lowercase in your password?");
    var addnumeric = confirm("Would you like to include numbers in your password?");
    var addspecialChar = confirm("Would you like to include special characters in your password?");

    if (!addupperCase && !addlowerCase && !addnumeric && !addspecialChar){
      alert("You must choose at least 1 0f 4 character category options");
    }

    if (addupperCase){ passwordChar.push (...upperCaseLetters)}
    if (addlowerCase){ passwordChar.push (...lowerCaseLetters)}
    if (addnumeric){ passwordChar.push (...numbers)}
    if (addspecialChar){ passwordChar.push (...specialCharacters)}

    var finalPassword = "";
    for  (var i = 0; i < numofChar; i++) {
      var randomChar = passwordChar[Math.floor(Math.random() *passwordChar.length)];
      finalPassword += randomChar;
    }

    return finalPassword;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
