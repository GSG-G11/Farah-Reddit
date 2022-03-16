const userNameHeader=document.querySelector('.userName');
const user=document.querySelector('#user')
const home =document.querySelector('#home')
const add = document.querySelector('#plus')

getData('/api/v1/user').then(res=>{

    localStorage.setItem('userId',res.data.id)
    userNameHeader.textContent=res.data.username    
})
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