const signUpForm =document.querySelector('#signUpForm')
signUpForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const{email, password,repeatPassword, username}=e.target;
    if(password.value === repeatPassword.value){
        sendData('/api/v1/signup',{username:username.value.trim(),email:email.value.trim(),password:password.value.trim()})
        .then(()=>  window.location.href="/")
        .catch((err)=>swal({
            icon: 'error',
            title: 'Oops...',
            text: err.response.data,
        }))
    }
    else{
        swal({
            icon: 'error',
            title: 'Oops...',
            text: 'The password is incorrect!',
          });
     
    }
})
