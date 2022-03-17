const formPost=document.querySelector('.formPost')

formPost.addEventListener('submit',(e)=>{
    console.log('imhhh')
    e.preventDefault()
    const {postTitle ,postDetail,img} =e.target;
    sendData('/api/v1/posts',{title:postTitle.value,content:postDetail.value,img:img.value}).then(()=>{
        window.location.href='/'
    }).catch((err)=>swal({
        icon: 'error',
        title: 'Oops...',
        text: err.response.data,
    }))
})