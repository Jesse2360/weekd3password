//Am creating array of special character for the password
var specialCharacters = [  '@','%','+', '\\',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];

// added arr of # for password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

//added arr of lowercase letters for password
var lowerCasedCharacters = ['a', 'b', 'c', 'd', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q',
 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

 // added arr of uppercase letters for password
var upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
'Q', 'R', 'S', 'T', 'U', 'W', 'X', 'Y', 'Z'];

// tell user for password option
function getPasswordOptions() {
  var length = parseInt(
    prompt('How many characters would you like your password to contain?')
  );
  
  // statement to see if the length of passw isa number nothing else
  //statement to see if at least 8 characters in length
  if (isNaN(length) === true) {
    alert('Password length must be provided as a number');
    return;
  }

  if (length < 8) {
    alert('Password length must be at least 8 characters');
    return;
  }

  // make sure the length not to go over 128 characters
  if (length > 128) {
    alert('Password length must less than 129 characters');
    return;
  }

  // make sure include special characters
  var hasSpecialCharacters = confirm(
    'Click OK to confirm including special characters.'
  );
  // make sure include nubers
  var hasNumericCharacters = confirm(
    'Click OK to confirm including numeric characters.'
  );
  
  // make sure include lowercase letters
  var hasLowerCasedCharacters = confirm(
    'Click OK to confirm including lowercase characters.'
  );
  
  // make sure to include uppercase letters
  var hasUpperCasedCharacters = confirm(
    'Click OK to confirm including uppercase characters.'
  );
  
  // Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
