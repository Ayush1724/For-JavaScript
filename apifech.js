async function fetdata(){
    let data = await fetch ("https://jsonplaceholder.typicode.com/posts")
    let res = await data.json()
    console.log(res);
    
}

fetdata()