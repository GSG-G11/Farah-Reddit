const postSection=document.querySelector('.postSection')
let id =window.location.href.split('/')[4]
getData(`/api/v1/profile/${id}`)
.then(res => {
    if (res.data.length) res.data.forEach(element => renderPost(element))
    else postSection.textContent = 'no posts yet'
})
.catch((err)=>swal({
    icon: 'error',
    title: 'Oops...',
    text: err.response.data,
}))

