const fetchData = (callBack)=>{
    fetch('http://jsonplaceholder.typicode.com/posts')
    .then(response=>response.json())
    .then(data => callBack(data,null))
    .catch(error => callBack(null,error))
}

function handleData(data,error){
  if(error)
  {
    console.log(error)
    return
  }
  console.log(data)
}
fetchData(handleData)