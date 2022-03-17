const userNameHeader=document.querySelector('.userName');
const user=document.querySelector('#user')
const home =document.querySelector('#home')
const add = document.querySelector('#plus')
const AuthHeader=document.querySelector(".AuthHeader")
const UnAuth=document.querySelector('.UnAuth')
console.log(UnAuth)

getData('/api/v1/user').then(res=>{
    console.log(res.data)

    localStorage.setItem('userId',res.data.id)
    userNameHeader.textContent=res.data.username
           console.log('hrer')
        UnAuth.style.display='none'
        AuthHeader.style.display='flex'  
   
}).catch((err)=>{
    if(err.response.status ===401){
        console.log('hrer')
        UnAuth.style.display='flex'
        AuthHeader.style.display='none'
}
});
/*swal({
    icon: 'error',
    title: 'Oops...',
    text: err.response.data,
})}*/

add.addEventListener('click',()=>{
 
    window.location.href='/addPost'
})
home.addEventListener('click',()=>{
    window.location.href='/home'
})
user.addEventListener('click',()=>{
    let id=localStorage.getItem('userId')
    window.location.href=`/profile/${id}`
})