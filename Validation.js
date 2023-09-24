let userInput = document.querySelector('.container .input-box input');
let eye = document.querySelector('.container .input-box .fa-eye');
let eyeSlash = document.querySelector('.container .input-box .fa-eye-slash');
let minLength = document.querySelector('.password-length');
let lowercase = document.querySelector('.lowercase');
let uppercase = document.querySelector('.uppercase');
let digit = document.querySelector('.number');
let specialChar = document.querySelector('.special-character');

let passToggle =()=>{
 if(userInput.type == 'password'){
    userInput.type = 'text';
    eye.style.display = 'none';
    eyeSlash.style.display = 'block';
 }else{
    userInput.type = 'password';
    eye.style.display = 'block';
    eyeSlash.style.display = 'none';
 }
} 

let checkPassword =()=>{
        
let value = userInput.value;
const passLength = new RegExp('(?=.{8,})');
const lower = new RegExp('(?=.*[a-z])');
const upper = new RegExp('(?=.*[A-Z])');
const number = new RegExp('(?=.*[0-9])');
const special = new RegExp('(?=.*[!@#$%^&*])');

//check pass length
if(passLength.test(value)){
 minLength.classList.add('valid');
}else{
 minLength.classList.remove('valid');
}

//check lowercase
if(lower.test(value)){
 lowercase.classList.add('valid');
}else{
 lowercase.classList.remove('valid');
}

//check uppercase
if(upper.test(value)){
 uppercase.classList.add('valid');
}else{
 uppercase.classList.remove('valid');
}

//check number 
if(number.test(value)){
 digit.classList.add('valid');
}else{
 digit.classList.remove('valid');
}

//Check special character
if(special.test(value)){
 specialChar.classList.add('valid');
}else{
 specialChar.classList.remove('valid');
}
}

userInput.addEventListener('input',checkPassword);
