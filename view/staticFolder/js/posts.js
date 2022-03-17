const postSection = document.querySelector('.postSection')
getData('/api/v1/posts').then(res => {
    if (res.data.length) res.data.forEach(element => renderPost(element))
    else postSection.textContent = 'no posts yet'
})
    .catch((err) => swal({
        icon: 'error',
        title: 'Oops...',
        text: err.response.data,
    }))

