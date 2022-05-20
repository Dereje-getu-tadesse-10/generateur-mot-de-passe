
const screen = document.querySelector('.screen');
const rangePassword = document.querySelector('#range');
let ge = rangePassword.value
// const allCheckBox = document.querySelectorAll('input[type="checkbox"]');

const displayPassword = document.querySelector('.displayPassword');
const generatePassword = document.querySelector('#generate');
const copyPassword = document.querySelector('.greenCopy');

const keys = {
    upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowerCase: "abcdefghijklmnopqrstuvwxyz",
    number: "0123456789",
    symbol: "!@#$%^&*()_+~\\`|}{[]:;?><,./-="
}

const getKey = [
    function upperCase() {
      return keys.upperCase[Math.floor(Math.random() * keys.upperCase.length)];
    },
    function lowerCase() {
      return keys.lowerCase[Math.floor(Math.random() * keys.lowerCase.length)];
    },
    function number() {
      return keys.number[Math.floor(Math.random() * keys.number.length)];
    },
    function symbol() {
      return keys.symbol[Math.floor(Math.random() * keys.symbol.length)];
    }
  ];

rangePassword.addEventListener('input', () => {
    let val = rangePassword.value;
    screen.textContent = val;
})

function createPassword() {

    // const upper = document.getElementById('upper').checked;
    // const lower= document.getElementById('lower').checked;
    // const number = document.getElementById('number').checked;
    // const symbol = document.getElementById('speChar').checked;

    const upper = document.getElementById("upperCase").checked;
    const lower = document.getElementById("lowerCase").checked;
    const number = document.getElementById("number").checked;
    const symbol = document.getElementById("symbol").checked;
    if (upper + lower + number + symbol === 0) {
      alert("Please check atleast one box!");
      return;
    }

    const length = document.getElementById("range");
    let password = "";
    while (length.value > password.length) {
      let keyToAdd = getKey[Math.floor(Math.random() * getKey.length)];

      const isChecked = document.getElementById(keyToAdd.name).checked;

      if (isChecked) {
        password += keyToAdd();
      }
    }
    return password
}

generatePassword.addEventListener('click',()=>{
    let range =+ rangePassword.value;
    createPassword()

})

  // Return a random symbol
//   const getRandomSymbol = () => {
//     let symbols = "!@#$%^&*(){}[]=<>/,.";
//     symbols = symbols.split("");
//     return symbols[Math.floor(Math.random() * symbols.length)];
//   };
