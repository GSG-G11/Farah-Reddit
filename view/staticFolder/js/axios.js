
const getData=(url)=>{
    return axios.get(url)
    .then(data=>data)
}
const sendData=(url,dataObject)=>{
    return axios.post(url,dataObject)
    .then(data=>data)
   
 
}