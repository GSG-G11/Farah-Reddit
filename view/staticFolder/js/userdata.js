const userNameHeader=document.querySelector('.userName');
const user=document.querySelector('#user')
const home =document.querySelector('#home')
const add = document.querySelector('#plus')
const AuthHeader=document.querySelector(".AuthHeader")
const UnAuth=document.querySelector('.UnAuth')
const img =document.querySelector('.img')
const logOut=document.querySelector('#logOut')
console.log('herer')
getData('/api/v1/user').then(res=>{
    userNameHeader.textContent=res.data.username      
        UnAuth.style.display='none'
        AuthHeader.style.display='flex'  
   
}).catch((err)=>{  
    if(err.response.status ===401){
        UnAuth.style.display='flex'
        AuthHeader.style.display='none'
}else{
    swal({
        icon: 'error',
        title: 'Oops...',
        text: err.response.data,
    })
}})
logOut.addEventListener('click',()=>{
    console.log('i ma hrer')
    getData('/api/v1/logout').then((data)=>{
        console.log(data.data)
        window.location.href='/'})
})
img.addEventListener('click',()=>window.location.href='/login')
add.addEventListener('click',()=>{
    console.log('data')
    window.location.href='/addPost'})
home.addEventListener('click',()=> window.location.href='/')
user.addEventListener('click',()=>{
    let id;
    getData('/api/v1/user').then((res)=>{
        id=res.data.id
    }).then(()=> window.location.href=`/profile/${id}`)
    .catch((err)=>{  
        swal({
            icon: 'error',
            title: 'Oops...',
            text: err.response.data,
        })
    })
})