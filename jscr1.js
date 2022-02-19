
// let Email= "kavyakaruppusamy09@gmail.com";


// let emaiCheck = (user)=>{
//     if(user.includes("@")){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// console.log(emaiCheck(Email));
// let password = '1234567';

//     let passChek= (pass) =>{
//     if(pass.includes('123456778') && (pass.length>6)){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// console.log(passChek(password));

 

// let myTodos =[];

// myTodos.push("Early wake up");
// myTodos.push("Go to gym");
// myTodos.push("Early study");
// myTodos.push("Do all the house hold works");
// myTodos.push("Go to Office");
// myTodos.push("Retutn from office");

// let findTodos = myTodos.findIndex((todo) =>{
//     return todo=="Go to office";
// })
// console.log(findTodos);

// let findTodos = function(checktodo, searchtodo){
//     let result = checktodo.findIndex((todo) =>{
//         return todo.toLowerCase()==searchtodo.toLowerCase();
//     })
//     return result;
// }
// console.log(findTodos(myTodos,"Go to office"));

// let findTodos = function(checktodo, searchtodo){
//     let result = checktodo.find((todo) =>{
//         return todo.toLowerCase()==searchtodo.toLowerCase();
//     })
//     return result;
// }
// console.log(findTodos(myTodos,"Go to office"));

// let convertRupees = (dollar)=>{
//     if(typeof dollar==="number"){
//         return dollar*69;
//     }
//     else{
//         throw Error("Amount should be in number");
//     }
    
// }
// try {
//     console.log(convertRupees("one"));
// } catch (error) {
//     console.error(error);
// }

// console.log("This line won't show if the program crashes");


// document.title= "Kavya";
// console.log(document.title);


// let myTag = document.getElementById("id123");
// console.log(myTag);
// console.log(document.getElementsByClassName("classone"))

// let myTag = document.querySelectorAll("#id123");
// console.log(myTag);

// let myTag = document.querySelectorAll(".classone");
// console.log(myTag[0]);

// let myTag = document.querySelector("p");
// console.log(myTag);
// myTag.textContent ="You are so awesome JAVASCRIPT";

// let myTag = document.querySelectorAll("p");
// //  console.log(myTag[0]);
//  myTag.forEach((element) => {
//      element.textContent ="Good morning JavaScript"
//      console.log(element);
//     //  element.remove();
//  });

// let newPtag =document.createElement("p");
// newPtag.textContent="Created New tag with JAVASCRIPT"
// // console.log(newPtag)

// document.querySelector("body").appendChild(newPtag);

// document.querySelector("button").addEventListener('click',(event)=>{
//       event.target.textContent="Joined"
//     //   document.querySelector("h1").textContent="Kavya";
// });

// document.querySelector("#idtwo").addEventListener("input", (event)=>{
//     console.log(event.target.value);
// })

function search(){
  //   let myValue =document.getElementById("idtwo").value
  //   console.log(myValue);
  //   if(myValue=="Kavya"){
  //     console.log("You are great");
  //   }
  //     else{
  //       console.log(myValue);
  //     }
  //   }
  
  let value = document.querySelector("body")
    value.style.background= "skyblue";
  
  }
  
  // function revert(){
    
  //    let value = document.querySelector("h1")
  //     value.style.color= "green";
    
    //}
  
    // function revert(){
    
    //   let value = document.querySelector("h1")
    //    value.style.display= "none";
     
    //  }
  
    function revert(){
    
      let ul=document.querySelector("ul");
      let newli = document.createElement("li");
             newli.textContent= "Created by JS";
       ul.appendChild(newli);
     }
