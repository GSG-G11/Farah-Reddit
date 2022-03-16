const userName=document.querySelector('.userName')
let userId;
getData('/api/v1/home').then(res=>{

    userId=res.data.id
    userName.textContent=res.data.username
    console.log(userName);}
)

getData('/api/v1/posts').then(res=>{
    res.data.forEach(element => {
        renderPost(element)
    })})
