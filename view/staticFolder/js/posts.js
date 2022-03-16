getData('/api/v1/posts').then(res=>{
res.data.forEach(element => renderPost(element))})

/*getData(`/api/v1/post/4`).then((data)=>console.log('the data',data))
getData(`/api/v1/post/4/comments`).then((data)=>console.log(data))

sendDa*/