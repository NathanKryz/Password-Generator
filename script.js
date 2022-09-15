// Assignment Code
var generateBtn = document.querySelector("#generate");
// Newly added code below
let passwordlength;
let allowlowercase;
let allowuppercase;
let allownumbers;
let allowspecialchars;
let chosencharacters;
let validchoice;
let newpassword;

//let passlowercase = ["a","b","c","d","e","f","g","h"]
//Generating arrays containing all the possible inputs for each character category
let uppercase = Array.from(Array(26)).map((e, i) => i + 65);
let passuppercase = uppercase.map((x) => String.fromCharCode(x));
console.log(passuppercase);

let lowercase = Array.from(Array(26)).map((e, i) => i + 97);
let passlowercase = lowercase.map((x) => String.fromCharCode(x));
console.log(passlowercase);

let numbercase = Array.from(Array(10)).map((e, i) => i + 48);
let passnumbers = numbercase.map((x) => String.fromCharCode(x));
console.log(passnumbers);
//This one can't be done the same way as the char codes are all over the place!
let passspecial = [" ","!","\"","#","$","%","&","\'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"];
console.log(passspecial);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword(){
  chosencharacters = [];
  newpassword = "";
  validchoice = false;
  do {
    passwordlength = 0;
    passwordlength = prompt("Enter desired password length between 8 and 128");
    passwordlength = parseInt(passwordlength);
    console.log(passwordlength);
    if(passwordlength >= 8 && passwordlength <= 128){
      validchoice = true;
      console.log("Check one");
    }
    else if (!passwordlength){
      console.log("Check terminate");
      return;
    }
    else {
      console.log("Check two");
      alert("You have entered an invalid password length, please try again.");
      validchoice = false;
    }
  } while(validchoice === false)
  do {
  allowlowercase = confirm("Do you wish to include lowercases to your password? Confirm = yes, Cancel = no.");
  allowuppercase = confirm("Do you wish to include uppercases to your password? Confirm = yes, Cancel = no.");
  allownumbers = confirm("Do you wish to include numeric characters to your password? Confirm = yes, Cancel = no.");
  allowspecialchars = confirm("Do you wish to include special characters to your password? Confirm = yes, Cancel = no.");
  console.log(allowlowercase);
  console.log(allowuppercase);
  console.log(allownumbers);
  console.log(allowspecialchars);
    if(!allowlowercase && !allowuppercase && !allownumbers && !allowspecialchars){
      validchoice = false;
      alert("Error, no useable characters selected, please try again.");
    }
    else {
      validchoice = true;
    }
  } while(validchoice === false)
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
  console.log(chosencharacters);
  for (i = 0; i < passwordlength; i++)
  {
    let x = Math.floor(Math.random() * (chosencharacters.length));
    newpassword = newpassword + chosencharacters[x];
  }
  console.log(newpassword);
  //newpassword = toString(newpassword);
  //console.log(newpassword);
  return newpassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
