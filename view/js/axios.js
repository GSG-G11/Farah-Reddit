

const getData=(url)=>{
    return axios.get(url)
    .then(data=>data)
    .catch((err)=>console.log(err))
}
const sendData=(url,dataObject)=>{
    return axios.post(url,dataObject)
    .then(data=>data)
    .catch((err)=>swal({
        icon: 'error',
        title: 'Oops...',
        text: err.response.data,
    }))
 
}