

const sendData=(url,dataObject)=>{
    axios.post(url,dataObject)
    .then(data=>{
       console.log(data)
    })
    .catch((err)=>swal({
        icon: 'error',
        title: 'Oops...',
        text: err.response.data,
    }))
 
}