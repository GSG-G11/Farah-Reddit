const postSection = document.querySelector('.postSection')
console.log('hhh')
getData('/api/v1/posts').then(res => {
    res.data.forEach(element => renderPost(element))  
})
    .catch((err) => swal({
        icon: 'error',
        title: 'Oops...',
        text: err.response.data,
    }))

