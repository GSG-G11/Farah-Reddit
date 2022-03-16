const userName=document.querySelector('.userName');
const user=document.querySelector('#user')
getData('/api/v1/home').then(res=>{
    localStorage.setItem('userId',res.data.id)
    userName.textContent=res.data.username    
})
user.addEventListener('click',()=>{
    let id=localStorage.getItem('userId')
    window.location.href=`/profile/${id}`
})