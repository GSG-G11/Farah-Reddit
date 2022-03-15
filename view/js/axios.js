

const sendData=(url,dataObject)=>{
    axios.post(url,dataObject)
    .then(data=>{
        window.location.href="/"
    })
    .catch((err)=>console.log('the errro',err.response.data))
}