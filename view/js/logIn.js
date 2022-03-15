const logInForm=document.querySelector('#LogInForm')
console.log(logInForm)
logInForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const {username,password}=e.target;
    sendData('/api/v1/login',{username:username.value.trim(), password:password.value.trim()})
})
