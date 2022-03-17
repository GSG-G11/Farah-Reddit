const formPost=document.querySelector('.formPost')

formPost.addEventListener('submit',(e)=>{
    e.preventDefault()
    const {postTitle ,postDetail,img}=e.target;
    let userId=localStorage.getItem('userId')
    sendData('/api/v1/post',{title:postTitle.value,content:postDetail.value,img:img.value,userId}).then(()=>{
        window.location.href='/home'
    }).catch((err)=>swal({
        icon: 'error',
        title: 'Oops...',
        text: err.response.data,
    }))
})