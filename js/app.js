// selectors
var passwordLengthRangeSlider = document.getElementById(
  "passwordLengthRangeSlider"
);
var passwordLength = document.getElementById("passwordLength");
var password = document.getElementById("password");
var isUpperCase = document.getElementById("uppercase");
var isLowerCase = document.getElementById("lowercase");
var isNumbers = document.getElementById("numbers");
var isSymbols = document.getElementById("symbols");
var copyBtn = document.getElementById("copyBtn");
var generateBtn1 = document.getElementById("generate-pwd-header");
var generateBtn2 = document.getElementById("generate-pwd-btn");
var copyBtn1 = document.getElementById("copy-pwd-header");
var copyBtn2 = document.getElementById("copy-pwd-btn");
var pwdCpyStatus = document.getElementById("password-copy-status");

//password generation process
const generatePassword = () => {
  //keys
  const keys = {
    upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowerCase: "abcdefghijklmnopqrstuvwxyz",
    number: "0123456789",
    symbol: "!@#$%^&*()_+~\\`|}{[]:;?><,./-=",
  };

  let tempPassword = "";

  if (isUpperCase.checked) tempPassword += keys.upperCase;
  if (isLowerCase.checked) tempPassword += keys.lowerCase;
  if (isNumbers.checked) tempPassword += keys.number;
  if (isSymbols.checked) tempPassword += keys.symbol;

  var temp = "";
  if (
    isUpperCase.checked ||
    isLowerCase.checked ||
    isNumbers.checked ||
    isSymbols.checked
  ) {
    for (let i = 0; i < passwordLengthRangeSlider.value; i++) {
      temp += tempPassword.charAt(
        Math.floor(Math.random() * tempPassword.length)
      );
    }
  }

  return temp;
};


//generate a random password
const generateNewPassword = ()=>{
    password.value = generatePassword();
    pwdCpyStatus.style.display = "none";
}

//copy the generated password
const copyPwd = () => {
    navigator.clipboard.writeText(password.value).then(() => {
       pwdCpyStatus.style.display = 'block';
    }).catch((err) => {
        pwdCpyStatus.style.display = 'block';
        pwdCpyStatus.style.color='red';
        pwdCpyStatus.textContent = err.message;
    })
}

//generate new password when clicking the extension
password.value = generatePassword();


//event listners
generateBtn1.addEventListener('click', generateNewPassword);
generateBtn2.addEventListener('click', generateNewPassword);
copyBtn1.addEventListener("click", copyPwd);
copyBtn2.addEventListener("click", copyPwd);


//change text filed when chaning range input
passwordLengthRangeSlider.addEventListener("input", function (e) {
  passwordLength.value = e.target.value;
  password.value = generatePassword();
});




