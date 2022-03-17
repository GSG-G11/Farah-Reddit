const addCommentsForm=document.querySelector('.addCommentsForm')
const id=window.location.href.split('/')[4]
const userId=localStorage.getItem("userId")

getData(`/api/v1/post/${id}`).then((data)=>console.log('the data',data.data))
getData(`/api/v1/post/${id}/comments`)
.then((res)=> res.data.forEach(element => renderComments(element)))
.catch((err)=>swal({
    icon: 'error',
    title: 'Oops...',
    text: err.response.data,
}))
addCommentsForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const {content}=e.target
    sendData('/api/v1/comment',{content:content.value,postId:id, userId})
    .then((data)=>renderComments(data.data))
    .catch((err)=>swal({
        icon: 'error',
        title: 'Oops...',
        text: err.response.data,
    }))
})