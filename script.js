// Creates a button to be used for the generation !Untouched!
var generateBtn = document.querySelector("#generate");
// Declaring the many needed variables.
let passwordlength;
let allowlowercase;
let allowuppercase;
let allownumbers;
let allowspecialchars;
let chosencharacters;
let validchoice;
let newpassword;

//Generating arrays containing all the possible inputs for each character category
let uppercase = Array.from(Array(26)).map((e, i) => i + 65);
let passuppercase = uppercase.map((x) => String.fromCharCode(x));

let lowercase = Array.from(Array(26)).map((e, i) => i + 97);
let passlowercase = lowercase.map((x) => String.fromCharCode(x));

let numbercase = Array.from(Array(10)).map((e, i) => i + 48);
let passnumbers = numbercase.map((x) => String.fromCharCode(x));
//This one can't be done the same way as the char codes are all over the place!
let passspecial = [" ","!","\"","#","$","%","&","\'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"];

// Write password to the #password input !Untouched!
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Password generating function, starts with sanitizing variables
function generatePassword(){
  chosencharacters = [];
  newpassword = "";
  validchoice = false;
  // Loop for so long as an invalid choice is made
  do {
    passwordlength = 0;
    passwordlength = prompt("Enter desired password length between 8 and 128");
    passwordlength = parseInt(passwordlength);
    // If password fits the criteria of length, set choice boolean to true to break the loop.
    if(passwordlength >= 8 && passwordlength <= 128){
      validchoice = true;
    }
    // If presses cancel, terminate the function.
    else if (!passwordlength){
      return placeholder;
    }
    else {
      // Invalid length alert and shifts choice boolean to false.
      alert("You have entered an invalid password length, please try again.");
      validchoice = false;
    }
  } while(validchoice === false)
  do {
    // True/false boolean confirm checks for each of the character typings.
  allowlowercase = confirm("Do you wish to include lowercases to your password? Confirm = yes, Cancel = no.");
  allowuppercase = confirm("Do you wish to include uppercases to your password? Confirm = yes, Cancel = no.");
  allownumbers = confirm("Do you wish to include numeric characters to your password? Confirm = yes, Cancel = no.");
  allowspecialchars = confirm("Do you wish to include special characters to your password? Confirm = yes, Cancel = no.");
    // Validation to ensure at least one type of character was chosen.
    if(!allowlowercase && !allowuppercase && !allownumbers && !allowspecialchars){
      validchoice = false;
      // Confirm on failed character input so that the user has the choice to terminate or try again.
      let exit = confirm("Error, no useable characters selected, do you want to try again?");
      if (!exit) {
        return placeholder;
      }
    }
    // If any of the four character type booleans are true, set choice to true and break the loop.
    else {
      validchoice = true;
    }
  } while(validchoice === false)
  // Boolean check each character type, if it was selected, add it to an array of valid characters.
  if (allowlowercase){
    chosencharacters.push(...passlowercase);
  }
  if (allowuppercase){
    chosencharacters.push(...passuppercase);
  }
  if (allownumbers){
    chosencharacters.push(...passnumbers);
  }
  if (allowspecialchars){
    chosencharacters.push(...passspecial);
  }
  // Run a for loop based on the length of selected password, to grab randomly from an index determined on valid character array.
  for (i = 0; i < passwordlength; i++)
  {
    let x = Math.floor(Math.random() * (chosencharacters.length));
    newpassword = newpassword + chosencharacters[x];
  }

  //End of function, return the randomly generated password.
  return newpassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
