fetch("https://jsonplaceholder.typicode.com/users")
.then( (user)=>{
return user.json()

}  ).then(  (data)=>{
    console.log(data)
} )