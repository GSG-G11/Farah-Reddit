const userName=document.querySelector('.userName');
let id;
getData('/api/v1/home').then(res=>{
    userId=res.data.id
    userName.textContent=res.data.username
    id=res.data.id
    return getData(`/api/v1/profile/${id}`)
    }).then((res)=>res.data.forEach(element => {renderPost(element)} ))
