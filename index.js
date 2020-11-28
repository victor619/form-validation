const email = document.getElementById('input');
const error = document.getElementById('message');
const btn = document.getElementById('btn');

btn.addEventListener('click',validate)

function validate (){
let reg = /[a-z0-9]+@+[a-z]+\.+[a-z]{2,3}/i

if(reg.test(email.value)){
    error.innerHTML = ''
    
   
}
else{
    console.log('false')
 error.innerHTML = `invalid email address`
 error.style.color = `red`
}
}