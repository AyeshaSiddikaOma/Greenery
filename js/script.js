fetch("https://jsonplaceholder.typicode.com/users")
.then( (user)=>{
setTimeout(()=>{
   console.log(user)
},100)
}  )