
const screen = document.querySelector('.screen');
const rangePassword = document.querySelector('#range');
let ge = rangePassword.value
// const allCheckBox = document.querySelectorAll('input[type="checkbox"]');

const displayPassword = document.querySelector('.displayPassword');
const generatePassword = document.querySelector('#generatePass');
const copyPassword = document.querySelector('.greenCopy');
const success = document.querySelector('.success');

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

    const upper = document.getElementById("upperCase").checked;
    const lower = document.getElementById("lowerCase").checked;
    const number = document.getElementById("number").checked;
    const symbol = document.getElementById("symbol").checked;
    if (upper + lower + number + symbol === 0) {
      alert("Coche une case");
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
    displayPassword.value = createPassword();
})

copyPassword.addEventListener('click', ()=>{
    if(!copy()){
      success.style.visibility = "visible"
    }else{
      success.style.visibility = "hidden"
    }
})
// copy pass

function copy() {
    let copyText = document.querySelector(".displayPassword");
    copyText.select();
    document.execCommand("copy");
}