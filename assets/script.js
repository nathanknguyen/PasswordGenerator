// Assignment Code
console.log(this);
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  window.alert("Now click return or press the button to see your randomly generated password");

}

function generatePassword() {
  var charOptions = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var password = "";
  var passwordLength = window.prompt("Choose a number between 8 and 128. That will be the length of your password");
  var characterTypes = window.prompt("Now choose the special characters that you want included in your random password without any spaces. If you want capital letters you must type every letter of the alphabet in capital letters in your response. Choose between these : !, @, #, $, %, &, ?");
  charOptions += characterTypes;
  
  for (var i = 0; i < passwordLength - 1; i++) {
    password += charOptions[Math.floor(Math.random() * charOptions.length)];
    
  }
  password += charOptions[Math.floor(Math.random() * charOptions.length)];
  return password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
