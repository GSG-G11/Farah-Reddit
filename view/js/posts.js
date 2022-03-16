getData('/api/v1/posts').then(res=>{
res.data.forEach(element => renderPost(element))})
