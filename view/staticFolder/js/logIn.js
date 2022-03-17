const logInForm=document.querySelector('#LogInForm')
console.log(logInForm)
logInForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const {username,password}=e.target;
    sendData('/api/v1/login',{username:username.value.trim(), password:password.value.trim()})
    .then(()=>  window.location.href='/')
    .catch((err)=>swal({
        icon: 'error',
        title: 'Oops...',
        text: err.response.data,
    }))
  
})
