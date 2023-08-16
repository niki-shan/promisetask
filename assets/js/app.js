let cl = console.log;

let card = document.getElementById("card");
let clickBtn = document.getElementById("clickBtn");
let moviecontainer= document.getElementById("moviecontainer")

const db = [
    { title: 'movie', 
    content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.' }
]
 
 const templating = (array) => {
    let result = "";
    db.forEach(ele => {
    result+=`<div class="card-header">
                <h3>${ele.title}</h3>
              </div>
         <div class="card-body">
                <p>${ele.content}</p>
        </div>
      <div class="card-footer">
             <button class="btn btn-primary" type="button">Add</button>
             <button class="btn btn-danger" type="button">Remove</button>
      </div>`
    })
    card.innerHTML=result
 }
  

 function firstfunction(){
  let promise= new Promise((resolve,reject) => {
    setTimeout(() => {
      let error = Math.random()<=.3 ? false : true;
      if(!error){
        resolve("first success")
      }else{
        reject("first fail")
      }
    })
  }, 100)
    return promise
 }
   
 function secondfunction(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      let error = Math.random()<=.3 ? false : true;
      if(!error){
        resolve("")
      }
    })
  })
 }
  
 onclick=()=>{
  firstfunction()
  .then(res=>{
   cl(res)
   return secondfunction()
  
  })
  .then((res)=>{
    cl(res)
    templating()
  })

  .catch(rej => { 
    cl(rej)
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
      footer: '<a href="">Why do I have this issue?</a>'
    })
   })

 }

   


    





clickBtn.addEventListener("click", onclick)










