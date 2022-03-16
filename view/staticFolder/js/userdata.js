const userName=document.querySelector('.userName');
const user=document.querySelector('#user')
const home =document.querySelector('#home')
const add = document.querySelector('#plus')

getData('/api/v1/user').then(res=>{
    console.log(res.data.id)
    localStorage.setItem('userId',res.data.id)
    userName.textContent=res.data.username    
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