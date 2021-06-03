// Assignment Code
console.log(this);
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  window.alert("Now ");

}

function generatePassword() {
  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  var password = "";
  var passwordLength = window.prompt("Choose a number between 8 and 128. That will be the length of your password");
  var characterTypes = window.prompt("Now choose the special character that you want included in your random password. Choose between ");
  var 
  for (var i = 0; i < passwordLength - 1; i++) {
    password += alphabet[Math.floor(Math.random() * alphabet.length)];
  }

  return password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
