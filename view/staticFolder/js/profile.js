
let id =window.location.href.split('/')[4]
getData(`/api/v1/profile/${id}`)
.then((res)=>res.data.forEach(element => {renderPost(element)})) 
.catch((err)=>swal({
    icon: 'error',
    title: 'Oops...',
    text: err.response.data,
}))

