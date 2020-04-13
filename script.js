// Assignment Code
var generateBtn = document.querySelector("#generate");

// Create Variables with arrays

var symbols = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "+",
  "=",
  "?",
  "<",
  ">",
];
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var upperLet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var lowerLet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

var chosenCharacters = [];

//Password criteria
var passSymbol = confirm("Would you like to use symbols?");
var passNum = confirm("Would you like to use numbers?");
var upperPass = confirm("Would you to use upper case letters?");
var lowerPass = confirm("Would you like to use lower case letters?");
var length = prompt(
  "How many characters would you like in your password? Must be at least 8 but no more then 128 characters"
);
console.log(typeof parseInt(length));
if (typeof parseInt(length) !== "number") {
  //not working
  alert("Please use digits or numbers.");
}
if (length > 128 || length < 8) {
  alert("Please select between 8 and 128 characters.");
}

console.log(length);

var passLength = parseInt(length);

///Conditional statements
if (passSymbol === true) {
  chosenCharacters = chosenCharacters.concat(symbols);
}
if (passNum === true) {
  chosenCharacters = chosenCharacters.concat(num);
}

if (upperPass === true) {
  chosenCharacters = chosenCharacters.concat(upperLet);
}
if (lowerPass === true) {
  chosenCharacters = chosenCharacters.concat(lowerLet);
}
console.log(chosenCharacters);

if (
  passSymbol === false &&
  passNum === false &&
  upperPass === false &&
  lowerPass === false
) {
  alert("Must choose at least one criteria!!!");
}

/// Function

function randomPass() {
  var pass = "";
  //not right
  for (var i = 0; i < passLength; i++) {
    pass =
      pass +
      chosenCharacters[Math.floor(Math.random() * chosenCharacters.length)];
  }
  // dont not if this is the best way
  if (pass.length > 128 || pass.length < 8) {
    pass = "";
  }
  // kills all code
  // if ((pass = "undefined")) {
  //   pass = "";
  // }
  return pass;
}

// Write password to the #password input
function writePassword() {
  var password = randomPass();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
